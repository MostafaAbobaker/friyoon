import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../interface/icontact';
import { MainServicesService } from '../../../features/services/main-services.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit , OnDestroy {
  subscriptions :any;
  mainScriptions :any;
  contactInfo :IContact = {} as IContact;
  ourServices: any;

  year: number = new Date().getFullYear(); // Get the current year

  constructor(private _contactService: ContactService, private _mainServices:MainServicesService) {
  }

  ngOnInit() {
    this.getContactInfo();
    this.getAllServices();
  }
  getContactInfo() {
    this.subscriptions = this._contactService.getContact().subscribe({
      next: (res) => {
        if (res?.data) {
          this.contactInfo = res.data;
        } else {
        }

      },
      error: (err) => {

      }
    });
  }

 getAllServices() {
    this.mainScriptions = this._mainServices.getMainServices().subscribe({
      next: (res) => {
        this.ourServices = res.data.filter((item : any) => item.showNavBar); // result = words.filter((word) => word.length > 6);

      },
      error: (err) => {

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
ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Unsubscribe to avoid memory leaks
    this.mainScriptions.unsubscribe(); // Unsubscribe to avoid memory leaks
  }

}
