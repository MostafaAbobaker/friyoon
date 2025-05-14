import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/Layout/home-layout/home-layout.component';
import { HomeComponent } from './features/pages/home/home.component';
import { OurServiceComponent } from './features/pages/our-service/our-service.component';
import { ServiceDetailsComponent } from './features/pages/service-details/service-details.component';
import { LoginLayoutComponent } from './core/Layout/login-layout/login-layout.component';
import { AdminLayoutComponent } from './core/Layout/admin-layout/admin-layout.component';
import { MainCategoryComponent } from './core/pages/main-category/main-category.component';
import { GovernoratesComponent } from './core/pages/governorates/governorates.component';
import { AddMainCategoryComponent } from './core/pages/add-main-category/add-main-category.component';
import { EditMainCategoryComponent } from './core/pages/edit-main-category/edit-main-category.component';
import { ContactusComponent } from './core/pages/contactus/contactus.component';
import { authGuard } from './core/guards/auth.guard';
import { SubCategoryComponent } from './core/pages/sub-category/sub-category.component';
import { AddSubCategoryComponent } from './core/pages/add-sub-category/add-sub-category.component';

export const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'our-service/:id', component: OurServiceComponent },
      { path: 'service-details', component: ServiceDetailsComponent },
      { path: 'governorates',canActivate: [authGuard], component: GovernoratesComponent },
      { path: 'main-category',canActivate: [authGuard], component: MainCategoryComponent },
      { path: 'sub-category',canActivate: [authGuard], component: SubCategoryComponent },
      { path: 'add-sub-category',canActivate: [authGuard], component: AddSubCategoryComponent },
      { path: 'contact-us',canActivate: [authGuard], component: ContactusComponent },
      { path: 'add-main-category',canActivate: [authGuard], component: AddMainCategoryComponent },
      { path: 'edit-main-category/:id',canActivate: [authGuard], component: EditMainCategoryComponent },

    ]
  },

  {
    path: 'admin',canActivate: [authGuard], component: AdminLayoutComponent
  },


  { path: 'login', component: LoginLayoutComponent },
];
