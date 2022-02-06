import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ParametrosRequest } from "app/_bussines_model/parametros";
import { ServiceResponse } from "app/_bussines_model/service-response";
import { SettingsApp } from "app/_common-model/settings-app";
import { catchError, Observable, of, retry } from "rxjs";
import * as global from './variablesGlobales';


@Injectable({
    providedIn: 'root'
  })
export class AutorizacionService {

    apiURL = SettingsApp.app.urlBack + '/authentication';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      constructor (
        private http: HttpClient,
      ) {}


      iniciarSesion(parametrosRequest: ParametrosRequest): Observable<any> {

        let url =  global.urlServidor + '/inicioSesion';

        return this.http.post( url, parametrosRequest , this.httpOptions).pipe(
            retry(1),
            catchError(
              this.handleError<any>(
                'Error al iniciar sesion',
                'Inicio Sesion'
              )
            )
          );  
      }


      registroUsuario(parametrosRequest: ParametrosRequest): Observable<any> {

        let url =  global.urlServidor + '/registroUsuario';

        return this.http.post( url, parametrosRequest , this.httpOptions).pipe(
            retry(1),
            catchError(
              this.handleError<any>(
                'Error al iniciar sesion',
                'Inicio Sesion'
              )
            )
          );  
      }

     

      private handleError<T>(message: string, operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          //this.notification.showError(message, operation);
          return of(result as T);
        };
      }


}