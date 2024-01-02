import {Component, Renderer2} from '@angular/core';
import {SidebarService} from "../../../../services/sidebar.service";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {SnackBarService} from "../../../../services/snack-bar.service";

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.scss']
})
export class StarterHeaderComponent {
  constructor(private sidebarService: SidebarService, private authService:AuthService, private router:Router,
              private snackBar:SnackBarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  logout(){
    if (this.authService.logout()){
        this.router.navigateByUrl('/security/login');
        this.snackBar.trigger('logout success!', 'close');
    }
  }
}
