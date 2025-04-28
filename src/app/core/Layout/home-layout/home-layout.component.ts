import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { FooterComponent } from "../../../shared/component/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
