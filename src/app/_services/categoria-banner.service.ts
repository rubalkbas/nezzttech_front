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
export class CategoriaBannerService{

  constructor(private http: HttpClient) { }

  listaCategoriaTodo(): Observable<any> {
    return this.http.get(  global.urlServidor + '/categoria/consultaCategoriaTodo');
  }

  listarImg(): Observable<any> {
    return this.http.get( global.urlServidor + '/CateBanner/listaImgBanner');
  }
  cambirEstatusImg(id): Observable<any> {
    return this.http.post( global.urlServidor + '/CateBanner/estatusImgBanner/?id=' + id, httpOptions);
  }

  editarImgBanner(banner): Observable<any>{
    return this.http.put( global.urlServidor + '/CateBanner/editarImgBanner/',banner, httpOptions);
  }

  traerImgBannerById(id): Observable<any> {
    return this.http.post( global.urlServidor + '/CateBanner/traerImgBannerById/?id=' + id, httpOptions);
  }

  agregarImgBanner(banner): Observable<any>{
    return this.http.post( global.urlServidor + '/CateBanner/agregarImgBanner',banner, httpOptions);
  }

  consultaProductosAleatorios(): Observable<any> {
    return this.http.get( global.urlServidor + '/CateBanner/consultaProductosAleatorios');
  }

  consultaProductosAleatoriosSlides(): Observable<any> {
    return this.http.get( global.urlServidor + '/CateBanner/consultaProductosAleatoriosSlides');
  }
}
