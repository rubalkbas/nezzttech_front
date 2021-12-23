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


export class OrdenServicioService {

    constructor(private http: HttpClient) { }

    regOrdenCompra(ordenCompra): Observable<any> {
        return this.http.post( global.urlServidor + '/ordenCompra/guardaOrdenComrpa',ordenCompra, httpOptions);
      }

      regOrdenCompraDetalle(ordenCompraDetalle): Observable<any> {
        return this.http.post( global.urlServidor + '/ordenCompra/guardaOrdenComrpaDetalle',ordenCompraDetalle, httpOptions);
      }

      consultaOrdenesServicio(): Observable<any> {
        return this.http.get( global.urlServidor + '/ordenCompra/consultaOrdenesServicio');
      }


      consultaDetalleOrdenServico(idOrdenCompra): Observable<any> {
        return this.http.post( global.urlServidor + '/ordenCompra/consultaDetalleOrdenServico?idOrdenCompra=',idOrdenCompra, httpOptions);
      }
      consultaOrdenServicoId(idOrdenCompra): Observable<any> {
        return this.http.post(  global.urlServidor + '/ordenCompra/consultaOrdenServicoId?idOrdenCompra='+idOrdenCompra, httpOptions);
      }

      consultaDetalleOrdenServicoId(idOrdenCompra): Observable<any> {
        return this.http.post( global.urlServidor + '/ordenCompra/consultaDetalleOrdenServicoId?idOrdenCompra='+idOrdenCompra, httpOptions);
      }

      consultaOrdenCompletadaUsu(idUsuario): Observable<any> {
        return this.http.get( global.urlServidor + '/ordenCompra/consultaOrdenCompletada?idUsuario='+idUsuario);
      }


      productoOrdenRecolectado(idOrdenCompra,idProduto): Observable<any> {
        return this.http.post( global.urlServidor + '/ordenCompra/productoOrdenRecolectado?idOrdenCompra='+idOrdenCompra+ '&idProduto='+idProduto, httpOptions);
      }

      agregaDireccionOrden(idOC,idD): Observable<any> {
        return this.http.post( global.urlServidor + '/ordenCompra/agregarDomicilio/?idD=' + idD + '&idOC=' + idOC, httpOptions);
      }

      agregarCodigoRastro(idOrdenCompra, codRastreo ): Observable<any> {
        return this.http.post( global.urlServidor + '/ordenCompra/agregarCodigoRastro?idOrdenCompra=' + idOrdenCompra + '&codRastreo=' + codRastreo, httpOptions);
      }

}