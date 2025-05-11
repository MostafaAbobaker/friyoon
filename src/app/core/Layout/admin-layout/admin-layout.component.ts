import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { FooterComponent } from "../../../shared/component/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [HeaderComponent, FooterComponent ,RouterModule ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
