import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EditorModule } from 'primeng/editor';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { environment } from '../../../../environments/environment.development';
import { MessageService } from 'primeng/api';
import { SubCategoryService } from '../../../core/services/sub-category.service';
import { IServiceInfo } from '../../interface/iservice-details';

@Component({
  selector: 'app-service-details',
  imports: [RouterModule, CommonModule, MultiSelectModule, EditorModule, ReactiveFormsModule, ToastModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
  providers: [MessageService]
})
export class ServiceDetailsComponent {
  backendurl: string = environment.imageurl;
  serviceId!: string;
  service!: IServiceInfo;
  constructor(
    private _subCategoryService: SubCategoryService,
    private route: ActivatedRoute, private messageService: MessageService,
  ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];  // Get 'id' from the URL
      this.getService(params['id']);
    });

  }
  getService(id: string) {
    this._subCategoryService.getServiceById(id).subscribe({
      next: (res) => {
        this.service = res.data;
        console.log('=>',this.service);
      },
      error: (err) => {
        console.log(err);
      },
    });

  }
}
