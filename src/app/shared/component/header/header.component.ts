import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { IContact } from '../../interface/icontact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    contactInfo :IContact [] = []; // Initialize contactInfo as an empty array

    constructor(private _contactService: ContactService) {
    }
    ngOnInit() {
      this.getContactInfo();
    }
    getContactInfo() {
      this._contactService.getContact().subscribe({
        next: (res) => {
          this.contactInfo = res.data as IContact[]; // Cast the response to IContact[]
        },
        error: (err) => {
          alert(err.message);
        }
      });
    }


    formatPhoneNumber(phone: string): string {
      // Check if the phone number starts with a '+' and has 13 digits
      if (!phone.startsWith('+') ) {
        return phone.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3");


      } else if (phone.startsWith('+') ) {
        return phone.replace(/^(\+\d{3})(\d{3})(\d{3})(\d{4})$/, "($1) $2 $3 $4");

      } else {
        return phone
      }
    }

}
