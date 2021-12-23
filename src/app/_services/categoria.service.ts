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


export class CategoriaService {

    constructor(private http: HttpClient) { }

    listaCategoriaTodo(): Observable<any> {
        return this.http.get(  global.urlServidor + '/categoria/consultaCategoriaTodo');
      }

    consultarCargos(): Observable<any> {
        return this.http.get(  global.urlServidor + '/cargo/listaCargos');
      }

      consultaPadreHijaN1(): Observable<any> {
        return this.http.get( global.urlServidor + '/categoria/consultaPadreHijaN1');
      }

}