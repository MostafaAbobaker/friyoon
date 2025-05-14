import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { SubCategoryService } from '../../services/sub-category.service';
import { ISubCategory } from '../../interface/isub-category';

@Component({
  selector: 'app-sub-category',
  imports: [RouterModule, TableModule],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.scss'
})
export class SubCategoryComponent implements OnInit{
  subCategoryList!: ISubCategory[];
  subCategoryEmpty:ISubCategory[] = []


  PageNumber = 0;
  PageSize = 5;
  first = 0;
  loading = false;
  totalRecords: number = 0;
  porductDeleted:number = 0;


  constructor(private _subCategoryService:SubCategoryService) {

  }
  ngOnInit(): void {
    this.getAllSubCategory()
  }
  getAllSubCategory() {

    this._subCategoryService.getAllSubCategory(this.totalRecords,this.PageSize).subscribe({
      next:(res)=>{
        console.log(res);
        this.totalRecords = res.totalCount;
        // this.PageSize= data.limit;
        this.subCategoryList = res.data;
      } , error:(err)=>{console.log(err);
      }
    })
  }
}
