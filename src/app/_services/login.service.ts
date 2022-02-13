import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as global from './variablesGlobales';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post( global.urlServidor + '/authentication/signin', {
      correo: credentials.email,
      pass: credentials.password
    }, httpOptions);
  }


  public getLogin(us: any): Observable<any> {
    //const urlLogin = this.appSettings.path + 'slv-control-rest/api/login/determinaLogin';
    //const urlLogin = this.appSettings.path + 'seguridad-angular-rest/api/login/determinaLogin';
    
    const urlLogin = 'http://10.150.201.204:11280/seguridad-angular-rest/api/login/determinaLogin'; 

    return this.http.post('http://10.150.201.204:11280/seguridad-angular-rest/api/login/determinaLogin', us, httpOptions);

  }

  registerUser(credentials): Observable<any> {
    return this.http.post( global.urlServidor + '/authentication/signup/registro', {
      username: credentials.name,
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post( global.urlServidor + '/api/auth/signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  registro(user): Observable<any> {
    return this.http.post( global.urlServidor + '/api/auth/signup/registro', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  registroUsuarioI(user): Observable<any> {
    return this.http.post( global.urlServidor + '/api/auth/signup',user, httpOptions);
  }

}
