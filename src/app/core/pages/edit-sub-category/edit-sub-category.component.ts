import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
import { environment } from '../../../../environments/environment.development';
import { IService } from '../../../features/interface/iservice';
@Component({
  selector: 'app-edit-sub-category',
  imports: [RouterModule, CommonModule, MultiSelectModule, EditorModule, ReactiveFormsModule, ToastModule],
  templateUrl: './edit-sub-category.component.html',
  styleUrl: './edit-sub-category.component.scss',
  providers: [MessageService]
})
export class EditSubCategoryComponent {
  backendurl: string = environment.imageurl;
  text!: string;
  formService: FormGroup;
  imageP: any[] = [];
  images: any[] = [];  // to store the selected images
  categories!: ICategory[]
  service!: IService;
  productId!: string;
  governorates: IGovernorates[] = []

  constructor(
    private _subCategoryService: SubCategoryService,
    private _mainServices: MainServicesService,
    private _governoratesService: GovernoratesService,
    private fb: FormBuilder,
    private route: ActivatedRoute, private messageService: MessageService,
  ) {
    this.formService = this.fb.group({
      nameAr: ['', [Validators.required, Validators.maxLength(100)]],
      categoryId: ['', Validators.required],
      descAr: ['', [Validators.required, Validators.maxLength(500)]],
      detailAr: ['', Validators.required],
      id: new FormControl(null),
      showHome: new FormControl(false),
      files: new FormControl([]),  // initialize images control to hold file list
      LocationIds: new FormControl<IGovernorates[] | null>([]),
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadGovernorates();
    this.route.params.subscribe(params => {
      this.productId = params['id'];  // Get 'id' from the URL
      this.getService(params['id']);
    });

  }
  loadGovernorates() {
    this._governoratesService.getAllGovernorates().subscribe({
      next: (response) => {
        console.log(response);
        this.governorates = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  loadCategories() {
    this._mainServices.getCategoryOptions().subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response.data;
        console.log(response.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  changeFile(event: any) {
  }
  getService(id: string) {
    this._subCategoryService.getServiceById(id).subscribe({
      next: (response) => {
        this.service = response.data;
        this.formService.patchValue(response.data)
        this.formService.patchValue({
          LocationIds: response.data.locationIds // e.g., Rome and Paris
        });
      },
      error: (err) => {
        console.log(err);
      },
    });

  }

  updateService() {
    const formData = new FormData();
    formData.append('nameAr', this.formService.value.nameAr);
    formData.append('descAr', this.formService.value.descAr);
    formData.append('detailAr', this.formService.value.detailAr);
    formData.append('categoryId', this.formService.value.categoryId);
    formData.append('showHome', this.formService.value.showHome);
    //formData.append('videoUrl', this.formService.value.videoUrl);
    formData.append('id', this.productId);
    this.formService.value.LocationIds.forEach((id: string | Blob) => {
      formData.append('LocationIds', id);
    });
    this.images.forEach(image => {
      formData.append('files', image.file, image.file.name);  // append each image to FormData
    });

    debugger
    this._subCategoryService.updateService(formData).subscribe({
      next: (response) => {
        if (response.statusCode == 200) {
          this.messageService.add({ severity: 'success', summary: 'تنبيه', detail: response.message });
          this.getService(this.productId);
          this.images = [];
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: response.message });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: err.message });
      },
    });
  }
  removeImage(id: any) {
    this.images = this.images.filter(file => file.id !== id)
  }
  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  onFileChange(event: any): void {
    debugger
    console.log(event)
    const files = event.target.files;
    if (files) {
      // Iterate through the files and add them to the images array
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          this.images.push({
            file: file,
            previewUrl: reader.result,
            id: this.generateGUID()
          });
          event.target.value = '';  // Clears selected file
        };
        reader.readAsDataURL(file);  // read the file to preview
      }
    }
  }

  deleteImage(imgId: number) {
    let imageObj = {
      productId: this.productId,
      imageId: imgId
    };
    this._subCategoryService.deleteServiceImage(imageObj).subscribe({
      next: (response) => {
        if (response.statusCode == 200) {
          this.messageService.add({ severity: 'info', summary: 'تنبيه', detail: response.message });
          //this.getService(this.productId);
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: response.message });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: err.message });
      },
    });
  }
}
