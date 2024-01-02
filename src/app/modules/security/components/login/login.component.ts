import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from '@firebase/auth';
import {environment} from "../../../../../environments/environment";
import {SnackBarService} from "../../../../services/snack-bar.service";
import {Title} from "@angular/platform-browser";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor (private router:Router, private aFA:AngularFireAuth, private snackBarService:SnackBarService,
  private title:Title, private authService: AuthService) {}

  ngOnInit():void{
    this.title.setTitle('Security | Login');
    if (this.authService.isExistsToken("user-login-token")){
      this.router.navigateByUrl('/starter/home').then();
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  async login(){
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    if (email === environment.adminEmail && Number(password) == environment.adminPassword){
      this.authService.createToken(this.loginForm.get('email'));
      await this.router.navigateByUrl('/starter/home');
      this.snackBarService.trigger('login success!', 'close');
    }else {
      this.snackBarService.trigger("Invalid Details", "close");
    }

  }

  loginWithGoogle(){
    this.aFA.signInWithPopup(new GoogleAuthProvider())
      .then(response=>{
        this.authService.createToken(response.user?.email);
        this.router.navigateByUrl('/starter/home');
        this.snackBarService.trigger('login success!', 'close');
      })
  }

}
