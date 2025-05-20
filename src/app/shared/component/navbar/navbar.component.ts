import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MainServicesService } from '../../../features/services/main-services.service';
import { IMainServices } from '../../../features/interface/i-main-services';
import { IServiceDetails } from '../../../features/interface/iservice-details';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  city: string[] = ['الرياض', 'مكة', 'جدة', 'الدمام'];
  isShowSidebar: boolean = false; // Tracks the sidebar state
  activeSubMenu: string | null = null; // Tracks the active submenu
  isCollapsed: boolean = false; // Tracks the sidebar state
  serviceDetails:IServiceDetails[] = []
  ourServices: any;
  constructor(private _mainServices:MainServicesService) {}
  toggleSubMenu(subMenu: string): void {
    this.activeSubMenu = this.activeSubMenu === subMenu ? null : subMenu; // Toggles submenu
    // this.isCollapsed = false; // Toggles sidebar state
  }

  ngOnInit() {
    this.getAllServices();
  }
  getAllServices() {
    this._mainServices.getMainServices().subscribe({
      next: (res) => {
        this.ourServices = res.data.filter((item : any) => item.showNavBar); // result = words.filter((word) => word.length > 6);
        console.log(this.ourServices);

      },
      error: (err) => {
        console.log(err.message);

      }
    });
  }

  getDetailsService(id:number , name :string) {
        this.activeSubMenu = this.activeSubMenu === name ? null : name; // Toggles submenu

    this._mainServices.GetGovernoratesWithServicesDetailsByCategory(id).subscribe({
        next:(res)=>{
          console.log(res);
          this.serviceDetails = res
        }, error:(err)=>{
          console.log(err);

        }
      })
  }
}
