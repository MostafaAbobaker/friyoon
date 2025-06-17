import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactInfoService } from '../../services/contact-info.service';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule, ReactiveFormsModule , RouterModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent implements OnInit {
  editMode: boolean = false;

  formContactus: FormGroup = new FormGroup({
    id: new FormControl(1),
    phone: new FormControl(null, [Validators.required]),
    whatsApp: new FormControl(null, [Validators.required]),
    faceBookPage: new FormControl(null, [Validators.required]),
    aboutUs: new FormControl(null, [Validators.required]),
    details: new FormControl(null),
    address: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]), // Added email validator
    instagramPage: new FormControl(null, [Validators.required]),
    xPage: new FormControl(null, [Validators.required]),
  });

  constructor(private _contactInfoService: ContactInfoService) {}

  ngOnInit(): void {
    this.getContactInfo();
  }

  getContactInfo() {
    this._contactInfoService.getContactInfo().subscribe({
      next: (res) => {
        this.formContactus.patchValue(res.data);
        // Disable form initially
        if (!this.editMode) {
          this.formContactus.disable();
        }
      },
      error: (err) => {
      }
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.formContactus.enable();
    } else {
      this.formContactus.disable();
    }
  }

  updataContactInfo() {
    const formData = new FormData();
    formData.append('id', this.formContactus.value.id);
    formData.append('phone', this.formContactus.value.phone);
    formData.append('whatsApp', this.formContactus.value.whatsApp);
    formData.append('faceBookPage', this.formContactus.value.faceBookPage);
    formData.append('aboutUs', this.formContactus.value.aboutUs);
    formData.append('details', this.formContactus.value.details);
    formData.append('address', this.formContactus.value.address);
    formData.append('email', this.formContactus.value.email);
    formData.append('instagramPage', this.formContactus.value.instagramPage);
    formData.append('xPage', this.formContactus.value.xPage);
    this._contactInfoService.updataContactInfo(formData).subscribe({
      next: (res) => {
        this.editMode = false;
        this.formContactus.disable();
        // Optional: Show success message to user
      },
      error: (err) => {
        // Optional: Show error message to user
      }
    });
  }

}
