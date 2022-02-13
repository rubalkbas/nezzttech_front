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
export class BannerService{

  constructor(private http: HttpClient) { }

  listarImg(): Observable<any> {
    return this.http.get( global.urlServidor + '/banner/listaImgBanner');
  }
  cambirEstatusImg(id): Observable<any> {
    return this.http.post( global.urlServidor + '/banner/estatusImgBanner/?id=' + id, httpOptions);
  }

  editarImgBanner(banner): Observable<any>{
    return this.http.put( global.urlServidor + '/banner/editarImgBanner/',banner, httpOptions);
  }

  traerImgBannerById(id): Observable<any> {
    return this.http.post( global.urlServidor + '/banner/traerImgBannerById/?id=' + id, httpOptions);
  }

  agregarImgBanner(banner): Observable<any>{
    return this.http.post( global.urlServidor + '/banner/agregarImgBanner',banner, httpOptions);
  }

  consultaProductosAleatorios(): Observable<any> {
    return this.http.get( global.urlServidor + '/banner/consultaProductosAleatorios');
  }

  consultaProductosAleatoriosSlides(): Observable<any> {
    return this.http.get( global.urlServidor + '/ImgBanner/consultaProductosAleatoriosSlides');
  }
}
