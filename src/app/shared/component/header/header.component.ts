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
  contactInfo :IContact = {} as IContact;

    constructor(private _contactService: ContactService) {
    }
    ngOnInit() {
      this.getContactInfo();
    }
    getContactInfo() {
      this._contactService.getContact().subscribe({
        next: (res) => {

          if (res?.data) {
            this.contactInfo = res.data;
          } else {
            console.error("Data is undefined or missing.");
          }
        },
        error: (err) => {
          console.log(err.message);

        }
      });
    }


  formatPhoneNumber(phone: string | undefined): string {
      // إزالة أي مسافات زائدة
      if (phone) {
        phone = phone.trim();

      // Normalize input (remove leading '00' and replace with '+')
      if (phone.startsWith("00")) {
          phone = "+" + phone.substring(2);
      }

      // Format based on the structure
      if (phone.startsWith("+966")) {
          return phone.replace(/^\+966(\d{3})(\d{3})(\d{4})$/, "(+966) $1 $2 $3");
      } else if (phone.length === 10) {
          return phone.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3");
      } else {
          return phone; // Return as-is if format is not recognized
      }

    }  else {
      return "";

    }

  }

}
