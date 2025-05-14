import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { GovernoratesService } from '../../services/governorates.service';
import { IGovernorates } from '../../interface/igovernorates';
import { ICategory } from '../../../features/interface/icategory';
import { MainServicesService } from '../../../features/services/main-services.service';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditorModule } from 'primeng/editor';
import { SubCategoryService } from '../../services/sub-category.service';

@Component({
  selector: 'app-add-sub-category',
  imports: [RouterModule, CommonModule, MultiSelectModule, EditorModule, ReactiveFormsModule],
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

  constructor(private _subCategoryService: SubCategoryService, private _mainServices: MainServicesService, private _governoratesService: GovernoratesService,
    private fb: FormBuilder, private messageService: MessageService) {
    this.formSubCategory = this.fb.group({

    })
  }

  ngOnInit(): void {
    this.showCategory();
    this.showGovernorates();
  }
  showCategory() {
    this._mainServices.getMainServices().subscribe({
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

  showGovernorates() {
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

  addSubCategory() {

  }







  onFileImageSelected(event: any): void {
    this.images = event.target.files[0];
  }



}







