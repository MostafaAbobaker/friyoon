import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-service',
  imports: [],
  templateUrl: './item-service.component.html',
  styleUrl: './item-service.component.scss'
})
export class ItemServiceComponent {
  @Input() item = {
    title: '',
    image: '',};
}
