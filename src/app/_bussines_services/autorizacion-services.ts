import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ParametrosRequest } from "app/_bussines_model/parametros";
import { catchError, Observable, of, retry } from "rxjs";
import * as global from './variablesGlobales';


@Injectable({
    providedIn: 'root'
  })
export class AutorizacionService {

    apiURL =  global.urlServidor + '/authentication';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      constructor (
        private http: HttpClient,
      ) {}


      iniciarSesion(parametrosRequest: ParametrosRequest): Observable<any> {

        let url =  this.apiURL + '/inicioSesion';

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
                'Error al registrar usuario',
                'Registro Usuario'
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