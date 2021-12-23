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
export class ContactoService {

  constructor(private http: HttpClient) { }

  emailContacto(body): Observable<any> {
    return this.http.post( global.urlServidor + '/miscelanea/emailContacto', body, httpOptions);
  }

}
