import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GovernoratesService } from '../../services/governorates.service';
import { IGovernorates } from '../../interface/igovernorates';
import { ICategory } from '../../../features/interface/icategory';
import { MainServicesService } from '../../../features/services/main-services.service';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditorModule } from 'primeng/editor';
import { SubCategoryService } from '../../services/sub-category.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-sub-category',
  imports: [RouterModule, CommonModule, MultiSelectModule, EditorModule, ReactiveFormsModule , ToastModule],
  templateUrl: './add-sub-category.component.html',
  styleUrl: './add-sub-category.component.scss',
  providers: [MessageService]

})
export class AddSubCategoryComponent {
  text: string | undefined;
  categories!: ICategory[]
  governorates!: IGovernorates[]

  formSubCategory!: FormGroup;

  imageP: File | undefined;
  images: any[] = [];  // Array to hold image files and their preview URLs


  constructor(
    private _subCategoryService: SubCategoryService,
    private messageService: MessageService,
    private _mainServices: MainServicesService,
    private _governoratesService: GovernoratesService,
    private fb: FormBuilder,
  ) {
    this.formSubCategory = this.fb.group({
      nameAr: ['', [Validators.required, Validators.maxLength(100)]],
      categoryId: ['', Validators.required],
      LocationIds: [[]],
      showHome: [false],
      descAr: ['', [Validators.required, Validators.maxLength(500)]],
      detailAr: ['', Validators.required]

    })
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadGovernorates();
  }
  loadCategories() {
    this._mainServices.getCategoryOptions().subscribe({
      next: (response) => {
        this.categories = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  loadGovernorates() {
    this._governoratesService.getAllGovernorates().subscribe({
      next: (response) => {
        this.governorates = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addSubCategory() {
    const formData = new FormData();

    formData.append('nameAr', this.formSubCategory.value.nameAr);
    formData.append('descAr', this.formSubCategory.value.descAr);
    formData.append('detailAr', this.formSubCategory.value.detailAr);
    formData.append('categoryId', this.formSubCategory.value.categoryId);
    formData.append('showHome', this.formSubCategory.value.showHome);
    //formData.append('videoUrl', this.formSubCategory.value.videoUrl);
    formData.append('id', '0');
    this.formSubCategory.value.LocationIds.forEach((id: string | Blob) => {
      formData.append('LocationIds', id);
    });
    this.images.forEach(image => {
      formData.append('files', image.file, image.file.name);  // append each image to FormData
    });


    this.formSubCategory.patchValue({ id: 0 });
    console.log(formData);

    this._subCategoryService.addSubCategory(formData).subscribe({
      next: (response) => {
        console.log(response);
        if (response.statusCode == 200) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message });
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: response.message });
        }
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });

      },
    }); 
  }




  removeImage(id:number) {
   this.images = this.images.filter(img => img.id !== id);

  }


  onFileImageSelected(event: any): void {
    // this.images = event.target.files[0];

    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push({
            id: Math.random().toString(36).substring(2),
            file,
            previewUrl: e.target.result
          });
        };
        reader.readAsDataURL(file);
      });
    }
  }



}







