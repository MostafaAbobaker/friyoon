import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  city: string[] = ['الرياض', 'مكة', 'جدة', 'الدمام'];
  isShowSidebar: boolean = false; // Tracks the sidebar state
  activeSubMenu: string | null = null; // Tracks the active submenu
  isCollapsed: boolean = false; // Tracks the sidebar state
  toggleSubMenu(subMenu: string): void {
    this.activeSubMenu = this.activeSubMenu === subMenu ? null : subMenu; // Toggles submenu
    // this.isCollapsed = false; // Toggles sidebar state
  }
}
