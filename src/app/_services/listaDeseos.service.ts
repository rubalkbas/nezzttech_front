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
export class ListaDeseos{

  constructor(private http: HttpClient) { }
  
  agregarProductLista(parametrosListaDeseos): Observable<any>{
    return this.http.post( global.urlServidor + '/listaDeseos/agregarProdLista',parametrosListaDeseos, httpOptions);
  }

  consultaListaDeseos(id): Observable<any> {
    return this.http.get( global.urlServidor + '/listaDeseos/consultaListaDeseo?idUsuario=' + id, httpOptions);
  }

  listarProductosUsu(id): Observable<any> {
    return this.http.get( global.urlServidor + '/listaDeseos/listaProdListaDeseoUsu?id=' + id, httpOptions);
  }

  limpiarWishList(id): Observable<any> {
    return this.http.post( global.urlServidor + '/listaDeseos/removerTodosLosProductos/?id=' + id, httpOptions);
  }

  quitarProductoWishList(idUsu,idPro): Observable<any> {
    return this.http.post( global.urlServidor + '/listaDeseos/removerProductoDeseado/?idUsu=' + idUsu + '&idProd=' + idPro, httpOptions);
  }
}
