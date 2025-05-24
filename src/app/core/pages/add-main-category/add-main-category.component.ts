import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainServicesService } from '../../../features/services/main-services.service';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ICategory } from '../../../features/interface/icategory';

@Component({
  selector: 'app-add-main-category',
  imports: [ReactiveFormsModule, RouterModule , ToastModule],
  templateUrl: './add-main-category.component.html',
  styleUrl: './add-main-category.component.scss',
    providers: [MessageService]

})
export class AddMainCategoryComponent  {
  getCategory: ICategory[] = [];
  selectedCategory: any = null; // Add this line
  imageP: File | null = null;
  iconP: File | null = null;
  uploadSuccess: boolean = false;
  formCategory: FormGroup;

  fileUploadForm: any;
  idCategoryDelete!:number
  constructor(
    private _categoryService: MainServicesService,
    private fb: FormBuilder,
    private messageService: MessageService
  )
  {
    this.formCategory = this.fb.group({
      id: new FormControl(null),
      nameAr: new FormControl(null, [Validators.required]), //Validators.pattern(/^[\u0600-\u06FF\s]+$/)
      //nameEn: new FormControl(null, [Validators.required]), //Validators.pattern(/^[a-zA-Z\s]+$/)
      imagefile: new FormControl(null),
      iconfile: new FormControl(null),
      descriptionAr: new FormControl(null, [Validators.required]),
    });
  }





  addCategory(): void {
    this.formCategory.value.imagefile = this.imageP;
    this.formCategory.value.iconfile = this.iconP;
    this.formCategory.value.descriptionAr = this.formCategory.value.descriptionAr;
    let nameAr: string = this.formCategory.value.nameAr.toLocaleLowerCase().trim()


    if(this.formCategory.valid) {


          this._categoryService.AddCategory(this.formCategory.value).subscribe({
            next: (response) => {
                this.formCategory.reset();
                this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message });



            },
            error: (err) => {
              this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: err.message });

            },
          });


    }


  }




  onFileImageSelected(event: any): void {
    this.imageP = event.target.files[0];
  }
  onFileIconSelected(event: any): void {
    this.iconP = event.target.files[0];
  }
}
