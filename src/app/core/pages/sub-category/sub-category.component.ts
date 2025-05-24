import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { SubCategoryService } from '../../services/sub-category.service';
import { ISubCategory } from '../../interface/isub-category';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-sub-category',
  imports: [RouterModule, TableModule],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.scss',
  providers: [MessageService]
})
export class SubCategoryComponent implements OnInit , OnDestroy {
  serviceList!: ISubCategory[];
  subCategoryEmpty:ISubCategory[] = []
  filteredServices: ISubCategory[] = [];

  PageNumber = 0;
  PageSize = 5;
  first = 0;
  loading = false;
  totalRecords: number = 0;
  porductDeleted:number = 0;
  subTitleService:any

  constructor(
    private _subCategoryService: SubCategoryService,
    private messageService: MessageService,
  ) {

  }

  ngOnInit(): void {
    this.getAllSubCategory()
  }
  getAllSubCategory() {

    this.subTitleService = this._subCategoryService.getAllSubCategory(this.PageNumber,this.PageSize).subscribe({
      next:(res)=>{
        this.totalRecords = res.totalCount;
        this.serviceList = res.data;
        this.filteredServices = res.data;
      } , error:(err)=>{
      }
    })
  }
  showdeleteServicePopup(id: number) {
    this.porductDeleted = id;
  }
  deleteService() {
    debugger
    this._subCategoryService.deleteService(this.porductDeleted).subscribe({
      next: (response) => {
        if (response.statusCode == 200) {
          this.messageService.add({ severity: 'info', summary: 'تنبيه', detail: response.message });
          this.getAllSubCategory();
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: response.message });
        }
      }, error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: err.message });
      }
    })
  }
  onPageChange(event: any): void {
    debugger
    // Update the page number and page size dynamically
    this.PageNumber = (event.first! / event.rows!) + 1; // Number of rows per page // event.first is the first index on the current page
    this.PageSize = event.rows!; // event.rows is the number of rows per page
    this.first = event.first!;
    this.getAllSubCategory(); // Fetch data for the new page
  }
  applyFilter(event: Event) {
    debugger
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.trim().toLowerCase();
    this.filteredServices = this.serviceList.filter(product =>
      product.nameAr.toLowerCase().includes(filterValue)
    );
  }

  getGovernorateNames(governorates: any[]): string {
    return governorates?.map(g => g.nameAr).join(', ') || '';
  }
  ngOnDestroy(): void {
    this.subTitleService.unsubscribe();
  }
}
