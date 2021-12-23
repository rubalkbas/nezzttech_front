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


export class CatalogoService {

    constructor(private http: HttpClient) { }

    buscaCP(cp): Observable<any> {
        return this.http.post( global.urlServidor + '/catalogos/consultaCategoriaHija?cp=' + cp, httpOptions);
      }

    

}