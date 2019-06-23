import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { Raza } from '../model/domain';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  constructor(private apiService: ApiService) { }

  findRazasList(): Observable<string[]> {
    return this.apiService.findAllRazas()
    .pipe(
      switchMap( response => {
        const msg = response.message;
        const razas: string[] = [];
        for (const item of Object.keys(msg)) {
          razas.push(item);
        }
        return of(razas);
      })
    );
  }

  findAll(): Observable<Raza[]> {
    return this.apiService.findAllRazas()
    .pipe(
      switchMap(response => {
        const msg = response.message;
        const razas: Raza[] = [];
        for (const item of Object.keys(msg)) {
          const subrazas: string[] = [];
          for (const i of msg[item]) {
            subrazas.push(i);
          }
          razas.push({
            nombre: item,
            subrazas: subrazas
          });
        }
        return of(razas);
      })
    );
  }
}
