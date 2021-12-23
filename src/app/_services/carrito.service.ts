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


export class CarritoService {

    constructor(private http: HttpClient) { }


      regCarrito(itemCarrito): Observable<any> {
        return this.http.post( global.urlServidor + '/carrito/guardaCarrito',itemCarrito, httpOptions);
      }

      eliminaCarrito(idUsuario): Observable<any> {
        return this.http.post( global.urlServidor + '/carrito/borraCarrito/?idUsuario=' + idUsuario, httpOptions);
      }

      consultaCarrito(idUsuario): Observable<any> {
        return this.http.post( global.urlServidor + '/carrito/consultaCarroCompras?idUsuario=' + idUsuario, httpOptions);
      }

}