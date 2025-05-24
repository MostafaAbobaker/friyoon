import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MainServicesService } from '../../../features/services/main-services.service';
import { ICategory } from '../../../features/interface/icategory';

@Component({
  selector: 'app-edit-main-category',
  imports: [ReactiveFormsModule, RouterModule, ToastModule],
  templateUrl: './edit-main-category.component.html',
  styleUrl: './edit-main-category.component.scss',
  providers: [MessageService]

})
export class EditMainCategoryComponent {
  categoryUrl!: number
  getCategory: ICategory[] = [];
  selectedCategory: any = null; // Add this line
  imageP: File | null = null;
  iconP: File | null = null;
  uploadSuccess: boolean = false;
  formCategory: FormGroup;

  fileUploadForm: any;
  idCategoryDelete!: number
  constructor(
    private _categoryService: MainServicesService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.formCategory = this.fb.group({
      id: new FormControl(null),
      nameAr: new FormControl(null, [Validators.required]), //Validators.pattern(/^[\u0600-\u06FF\s]+$/)
      //nameEn: new FormControl(null, [Validators.required]), //Validators.pattern(/^[a-zA-Z\s]+$/)
      imagefile: new FormControl(null),
      iconfile: new FormControl(null),
      descriptionAr: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {

    this._activatedRoute.paramMap.subscribe((params) => {
      this.categoryUrl = Number(params.get('id'));
    });
    this.getMainServicesById()
  }

  getMainServicesById() {
    this._categoryService.getMainServiceById(this.categoryUrl).subscribe({
      next: (res) => {
        this.formCategory.patchValue(res.data)
      }, error: (err) => {

      }
    })
  }
  editCategory() {
    this.formCategory.value.imagefile = this.imageP;
    this.formCategory.value.iconfile = this.iconP;
    this.formCategory.value.descriptionAr = this.formCategory.value.descriptionAr;


    if (this.formCategory.valid) {


      this._categoryService.updateCategory(this.formCategory.value).subscribe({
        next: (response) => {
          this.formCategory.reset();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message });

          /* setTimeout(() => {
            this._router.navigate(['../main-category'])

          }, 1000); */
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


