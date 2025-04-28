import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  allService = 3;
  ourServices = [
    {
      title:'خدمات التنظيف الشاملة' ,
      description:'          تقدم شركة فريون خدمات تنظيف شاملة للمنازل والشقق والفلل باستخدام اقوى انواع المنظفات المستوردة واحدث اجهزة التنظيف العالمية.',
      image:'1.jpg',
      icon:'house-cleaning.png'
    },
    {
      title:'خدمات المكيفات' ,
      description:'        تقدم شركة فريون خدمات صيانة وتنظيف المكيفات بجميع انواعها باستخدام احدث الاجهزة والمعدات.  تقدم شركة فريون خدمات صيانة وتنظيف المكيفات بجميع انواعها باستخدام احدث الاجهزة والمعدات.  تقدم شركة فريون خدمات صيانة وتنظيف المكيفات بجميع انواعها باستخدام احدث الاجهزة والمعدات.   تقدم شركة فريون خدمات صيانة وتنظيف المكيفات بجميع انواعها باستخدام احدث الاجهزة والمعدات.',
      image:'Air-services.jpg',
      icon:'air.png'
    },
    {
      title:'خدمات نقل العفش ' ,
      description:'          تقدم شركة فريون خدمات نقل العفش بجميع انواعه باستخدام احدث المعدات.',
      image:'Furniture-moving.jpg',
      icon:'moving-truck.png'
    },
    {
      title:'   خدمات العزل' ,
      description:'          تقدم شركة فريون خدمات عزل الاسطح والحمامات والمطابخ باستخدام احدث المواد العازلة.',
      image:'Insulation-services.jpeg',
      icon:'insulation.png'
    },


    {
      title:'    خدمات مكافحة الحشرات' ,
      description:'          تقدم شركة فريون خدمات مكافحة الحشرات بجميع انواعها باستخدام احدث المبيدات العالمية.',
      image:'Pest-services.jpeg',
      icon:'pest.png'
    },
    {
      title:'      خدمات رش المبيدات' ,
      description:'          تقدم شركة فريون خدمات رش المبيدات بجميع انواعها باستخدام احدث المبيدات العالمية.',
      image:'Pesticide-services.jpeg',
      icon:'pesticide.png'
    },
    {
      title:'      خدمات تسليك المجاري' ,
      description:'          تقدم شركة فريون خدمات تسليك المجاري بجميع انواعها باستخدام احدث المعدات.',
      image:'Sewerage-services.jpeg',
      icon:'sewage.png'
    },

    {
      title:'        خدمات كشف تسربات المياه' ,
      description:'          تقدم شركة فريون خدمات كشف تسربات المياه بجميع انواعها باستخدام احدث الاجهزة.',
      image:'Water-detection-services.png',
      icon:'leak-detector.png'
    },
    {
      title:'           خدمات التركيب' ,
      description:'          تقدم شركة فريون خدمات تركيب جميع انواع المكيفات والبرادات.',
      image:'Installation-services.jpg',
      icon:'easy-installation.png'
    },
    {
      title:'            خدمات جلي البلاط' ,
      description:'          تقدم شركة فريون خدمات جلي البلاط بجميع انواعه باستخدام احدث المعدات.',
      image:'Tile-services.jpeg',
      icon:'floor.png'
    },

  ]
}
