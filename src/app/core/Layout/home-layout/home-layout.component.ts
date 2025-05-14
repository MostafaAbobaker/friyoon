import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { FooterComponent } from "../../../shared/component/footer/footer.component";
import { RouterModule } from '@angular/router';
import { LoaderComponent } from "../../../shared/component/loader/loader.component";

@Component({
  selector: 'app-home-layout',
  imports: [HeaderComponent, FooterComponent, RouterModule, LoaderComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
