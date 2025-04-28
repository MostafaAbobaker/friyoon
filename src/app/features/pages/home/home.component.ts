import { Component } from '@angular/core';
import { MainCarouselComponent } from "../main-carousel/main-carousel.component";
import { ServicesComponent } from "../services/services.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  imports: [MainCarouselComponent, ServicesComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
