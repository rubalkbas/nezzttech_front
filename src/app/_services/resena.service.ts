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

export class ResenaService {

    constructor(private http: HttpClient) { }

    consultaResenaPorIdProducto(idProducto ): Observable<any> {
        return this.http.post( global.urlServidor + '/resena/consultaResenaPorIdProducto?idProducto='+ idProducto  ,httpOptions);
      }
    
    agregarResena(auxResenaProducto): Observable<any>{
        return this.http.post( global.urlServidor + '/resena/agregarResena',auxResenaProducto, httpOptions);
    }

    consultaResenas(): Observable<any> {
      return this.http.get( global.urlServidor + '/resena/consultaResenas');
    }

    estatusResena(idResenaProducto  ): Observable<any> {
      return this.http.post( global.urlServidor + '/resena/estatusResena?idResenaProducto='+ idResenaProducto   ,httpOptions);
    }

    resenaInactiva(idProducto,idUsuario  ): Observable<any> {
      return this.http.post( global.urlServidor + '/resena/resenaInactiva?idProducto='+ idProducto+ '&idUsuario='+idUsuario   ,httpOptions);
    } 

}