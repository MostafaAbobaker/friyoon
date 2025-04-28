import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'أحمد العلي',
      feedback: 'خدمة ممتازة وسريعة.',
      image: '1.jpg'
    },
    {
      name: 'سارة محمد',
      feedback: 'فريق عمل محترف وودود.',
      image: '2.jpg'
    },
    {
      name: 'علي الحسن',
      feedback: 'أنصح الجميع بالتعامل معهم.',
      image: '3.jpg'
    }
  ];
}
