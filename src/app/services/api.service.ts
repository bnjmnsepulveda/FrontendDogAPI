import { Injectable } from '@angular/core';
import { AbstractApiService } from './abstract-api-service';
import { ResponseApi } from '../model/domain';
import { HttpClient } from '@angular/common/http';
import * as contantes from '../model/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends AbstractApiService<ResponseApi<any>> {

  constructor(private http: HttpClient) { super(http); }

  findAllRazas(): Observable<ResponseApi<any>> {
    return super.get(`${contantes.API_URL}breeds/list/all`);
  }

  findAllSubrazas(nombre: string): Observable<ResponseApi<string[]>> {
    return super.get(`${contantes.API_URL}breed/${nombre}/list`);
  }

  findImagenesByRaza(raza: string): Observable<ResponseApi<string[]>> {
    return super.get(`${contantes.API_URL}breed/${raza}/images`);
  }

  findImagenesBySubraza(raza: string, subraza: string): Observable<ResponseApi<string[]>> {
    return super.get(`${contantes.API_URL}breed/${raza}/${subraza}/images`);
  }
}
