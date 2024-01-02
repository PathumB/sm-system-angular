import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public createToken(data:any){
    localStorage.setItem("user-login-token", data);
  }
  public isExistsToken(key:string):boolean{
    return localStorage.getItem(key) !== null;
  }
  public getToken(key:string):string{
    const token = localStorage.getItem(key);
    return token ? token : '';
  }
  public logout(): boolean {
    localStorage.removeItem('user-login-token');
    return true;
  }
}
