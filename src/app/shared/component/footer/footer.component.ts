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
  contactInfo! :IContact; // Initialize contactInfo as an empty array
  year: number = new Date().getFullYear(); // Get the current year

  constructor(private _contactService: ContactService) {
  }
  ngOnInit() {
    this.getContactInfo();
  }
  getContactInfo() {
    this._contactService.getContact().subscribe({
      next: (res) => {
        this.contactInfo = res.data ; // Cast the response to IContact[]
      },
      error: (err) => {
        alert(err.message);

      }
    });
  }


  formatPhoneNumber(phone: string): string {
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
}


}
