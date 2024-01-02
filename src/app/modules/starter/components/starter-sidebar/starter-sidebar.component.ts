import { Component } from '@angular/core';
import {SidebarService} from "../../../../services/sidebar.service";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {SnackBarService} from "../../../../services/snack-bar.service";
import {activate} from "@angular/fire/remote-config";

@Component({
  selector: 'app-starter-sidebar',
  templateUrl: './starter-sidebar.component.html',
  styleUrls: ['./starter-sidebar.component.scss']
})
export class StarterSidebarComponent {
  isSidebarOpen = false;

  constructor(private sidebarService: SidebarService, private authService:AuthService,
              private router:Router, private snackBar:SnackBarService) {}

  ngOnInit() {
    this.sidebarService.sidebarHidden$.subscribe((hidden) => {
      this.isSidebarOpen = !hidden;
    });
  }

  // logout
  logout(){
    if (this.authService.logout()){
      this.router.navigateByUrl('/security/login');
      this.snackBar.trigger('logout success!', 'close');
    }
  }

  protected readonly activate = activate;
}
