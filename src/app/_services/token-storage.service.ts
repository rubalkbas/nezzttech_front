import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

const CORREO_KEY = 'correo';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/sign-in']);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }



  public saveCorreo(correo): void {
    window.sessionStorage.removeItem(CORREO_KEY);
    window.sessionStorage.setItem(CORREO_KEY, JSON.stringify(correo));
  }

  public getCorreo(): any {
    return JSON.parse(sessionStorage.getItem(CORREO_KEY));
  }
  removeCurrentSession(): void {
    window.sessionStorage.removeItem(CORREO_KEY);
  
  }



}
