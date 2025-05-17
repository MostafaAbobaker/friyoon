import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IServiceInfo } from '../../interface/iservice-details';

@Component({
  selector: 'app-item-service',
  imports: [RouterModule],
  templateUrl: './item-service.component.html',
  styleUrl: './item-service.component.scss'
})
export class ItemServiceComponent {
  @Input() itemsService :IServiceInfo []  = []
}
