import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/Layout/home-layout/home-layout.component';
import { HomeComponent } from './features/pages/home/home.component';
import { OurServiceComponent } from './features/pages/our-service/our-service.component';
import { ServiceDetailsComponent } from './features/pages/service-details/service-details.component';

export const routes: Routes = [
  {path:'',component: HomeLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component: HomeComponent},
    {path:'our-service/:id',component: OurServiceComponent},
    {path:'service-details',component: ServiceDetailsComponent},
  ]},
  // {path: 'home', loadComponent: () => import('./core/Layout/home-layout/home-layout.component').then(m => m.HomeLayoutComponent)},
];
