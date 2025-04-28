import { Component } from '@angular/core';
import { ItemServiceComponent } from "../item-service/item-service.component";

@Component({
  selector: 'app-our-service',
  imports: [ItemServiceComponent],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.scss'
})
export class OurServiceComponent {


  ourServices=[
    {
      title: 'شركة تنظيف منازل بالرياض',
      image: '../../../../assets/img/website/1.jpg',
    },
    {
      title: 'شركة تنظيف خزانات بالرياض',
      image: '../../../../assets/img/website/2.jpg',
    },
    {
      title: 'شركة تنظيف موكيت بالرياض',
      image: '../../../../assets/img/website/3.jpg',
    },
    {
      title: 'شركة تنظيف بالرياض فلبينيين',
      image: '../../../../assets/img/website/4.jpg',
    },
    {
      title: 'شركة تنظيف فلل بالرياض',
      image: '../../../../assets/img/website/5.jpg',
    },
    {
      title: 'شركة تنظيف سجاد شرق الرياض',
      image: '../../../../assets/img/website/Air-services.jpg',
    },
    {
      title: 'شركة تنظيف شبابيك بالرياض',
      image: '../../../../assets/img/website/Installation-services.jpg',
    },
    {
      title: 'شركة تنظيف ارضيات بالرياض',
      image: '../../../../assets/img/website/Water-detection-services.png',
    },
    {
      title: 'أرخص شركة تنظيف محلات بالرياض',
      image: '../../../../assets/img/website/Tile-services.jpeg',
    },
    {
      title: 'شركة تنظيف مساجد بالرياض',
      image: '../../../../assets/img/website/Pesticide-services.jpeg',
    }
  ]


}
