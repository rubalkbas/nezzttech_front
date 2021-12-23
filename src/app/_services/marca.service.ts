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

export class MarcaService {

    constructor(private http: HttpClient) { }

    consultaCatalogoMarcaTodo(): Observable<any> {
        return this.http.get( global.urlServidor + '/marca/consultaCatalogoMarcaTodo');
      }

}