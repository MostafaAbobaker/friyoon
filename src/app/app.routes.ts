import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/Layout/home-layout/home-layout.component';
import { HomeComponent } from './features/pages/home/home.component';
import { OurServiceComponent } from './features/pages/our-service/our-service.component';
import { ServiceDetailsComponent } from './features/pages/service-details/service-details.component';
import { LoginLayoutComponent } from './core/Layout/login-layout/login-layout.component';
import { AdminLayoutComponent } from './core/Layout/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './core/pages/admin-home/admin-home.component';
import { ContactusComponent } from './core/pages/contactus/contactus.component';
import { GovernoratesComponent } from './core/pages/governorates/governorates.component';
import { MainCategoryComponent } from './core/pages/main-category/main-category.component';

export const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'our-service/:id', component: OurServiceComponent },
      { path: 'service-details', component: ServiceDetailsComponent },
    ]
  },

      {path: 'admin', component: AdminLayoutComponent , children:[
        { path: 'admin-home', component: AdminHomeComponent },
        { path: 'contact-us', component: ContactusComponent },
        { path: 'governorates', component: GovernoratesComponent },
        { path: 'main-category', component: MainCategoryComponent },

      ] },


  { path: 'login', component: LoginLayoutComponent },
];
