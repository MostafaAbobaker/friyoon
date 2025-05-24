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


    this._contactInfoService.updataContactInfo(this.formContactus.value).subscribe({
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
