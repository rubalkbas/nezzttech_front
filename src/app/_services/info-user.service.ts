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


export class InfoUserService {

    constructor(private http: HttpClient) { }

    regInfoUser(usuarioInfo): Observable<any> {
        return this.http.post( global.urlServidor + '/infoUsuario/guardaInfoUsuario',usuarioInfo, httpOptions);
      }

      consultaInfo(idUsuario): Observable<any> {
        return this.http.post( global.urlServidor + '/infoUsuario/consultaIdUsuario?idUsuario=' +  idUsuario,  httpOptions);
      }

      consultaDomicilios(idUsuario): Observable<any> {
        return this.http.post( global.urlServidor + '/infoUsuario/consultaDomicilioUsuario?idUsuario=' +  idUsuario,  httpOptions);
        
      }

      consultaDomPredeUsuario(idUsuario): Observable<any> {
        return this.http.post( global.urlServidor + '/infoUsuario/consultaDomPredeUsuario?idUsuario=' +  idUsuario,  httpOptions);
        
      }

      consultaDomOrden(idDomicilioUsuario): Observable<any> {
        return this.http.post(  global.urlServidor +'/infoUsuario/consultaDomOrden?idDomicilioUsuario=' +  idDomicilioUsuario,  httpOptions);
        
      }


      guardaDomPredeUsuario(idUsuario,idDomi): Observable<any> {
        return this.http.post( global.urlServidor + '/infoUsuario/guardaDomPredeUsuario?idUsuario=' +  idUsuario + '&idDomi=' + idDomi ,  httpOptions);
        
      }

      

      regDomUsuario(usuarioDomi): Observable<any> {
        return this.http.post( global.urlServidor + '/infoUsuario/guardaDomicilioUsuario',usuarioDomi, httpOptions);
      }

      

}