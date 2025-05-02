import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../interface/icontact';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactInfo :IContact [] = []; // Initialize contactInfo as an empty array
  year: number = new Date().getFullYear(); // Get the current year

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


    } else if (phone.startsWith('+') && phone.length === 13) {
      return phone.replace(/^(\+\d{3})(\d{3})(\d{3})(\d{4})$/, "($1) $2 $3 $4");

    } else {
      return phone
    }
  }


}
