import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainServicesService } from '../../../features/services/main-services.service';
import { IMainServices } from '../../../features/interface/i-main-services';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main-category',
  imports: [RouterModule , ToastModule],
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.scss',
  providers: [MessageService]

})
export class MainCategoryComponent implements OnInit{

  ourServices: IMainServices[] = [];
  constructor(private _mainServices: MainServicesService, private messageService: MessageService ){}
  ngOnInit(): void {
    this.getAllServices()
  }

getAllServices() {
    this._mainServices.getMainServices().subscribe({
      next: (res) => {
        this.ourServices = res.data; // Cast the response to IContact[]

      },
      error: (err) => {
        console.log(err.message);

      }
    });
  }
  deleteCategory(id:number) {
    this._mainServices.deleteCategory(id).subscribe({
      next:(res)=>{
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res });
        console.log(res);

         this.getAllServices();
      },
      error:(err)=>{
                      this.messageService.add({ severity: 'error', summary: 'تنبيه', detail: err.message });

      }

    })
  }
}
