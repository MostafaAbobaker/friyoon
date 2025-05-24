import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemServiceComponent } from "../item-service/item-service.component";
import { ActivatedRoute } from '@angular/router';
import { MainServicesService } from '../../services/main-services.service';
import { IServiceDetails } from '../../interface/iservice-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-service',
  imports: [ItemServiceComponent , CommonModule],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.scss'
})
export class OurServiceComponent implements OnInit ,OnDestroy {
  serviceUrl: number | null = null
  nameMainServices:string=''
    subscriptions: any;
    titleServiceScriptions : any;

  ourServices: IServiceDetails [] =[]
  constructor(private _activatedRoute: ActivatedRoute , private _mainServices:MainServicesService) {

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.serviceUrl = Number(params.get('id'));
    });
    this.getMainServicesById();
    this.getTitleService();
  }
  /* ourServices=[
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
  ] */

  getMainServicesById() {
    if(this.serviceUrl) {

      this.subscriptions = this._mainServices.GetGovernoratesWithServicesDetailsByCategory(this.serviceUrl).subscribe({
        next:(res)=>{
          this.ourServices = res
        }, error:(err)=>{

        }
      })
    }
  }
  getTitleService() {
    if(this.serviceUrl) {
      this.titleServiceScriptions = this._mainServices.getMainServiceById(this.serviceUrl).subscribe({
        next:(res)=>{
          this.nameMainServices = res.data.nameAr
        }, error:(err)=> {
        }
      })

    }
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Unsubscribe to avoid memory leaks
    this.titleServiceScriptions.unsubscribe(); // Unsubscribe to avoid memory leaks
  }
}
