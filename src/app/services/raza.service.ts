import { Injectable } from '@angular/core';
import { Observable, of, forkJoin, from } from 'rxjs';
import { ApiService } from './api.service';
import { Raza, Subraza } from '../model/domain';
import { switchMap, map, flatMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  constructor(private apiService: ApiService) { }

  findByNombre(nombre: string) {
    const subrazas$ = this.apiService.findAllSubrazas(nombre);
    const imagenes$ = this.apiService.findImagenesByRaza(nombre);
    return forkJoin([subrazas$, imagenes$]).pipe(
      map(responseList => {
        const raza: Raza = {
          nombre: nombre,
          subrazas: responseList[0].message,
          imagenes: responseList[1].message
        };
        return raza;
      })
    );
  }

  findSubrazaByNombre(raza: string, nombre: string): Observable<Subraza> {
    return this.apiService.findImagenesBySubraza(raza, nombre)
    .pipe(
      map(response => {
        const subraza: Subraza = {
          raza: raza,
          nombre : nombre,
          imagenes : response.message
        };
        return subraza;
      })
    );
  }

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
      map(response => response.message),
      switchMap(msg => {
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
        return from(razas);
      }),
      flatMap(raza => {
        const imagenes$ = this.findRandomImagenByNombreRaza(raza.nombre);
        return forkJoin(of(raza), imagenes$);
      }),
      switchMap(observables => {
        const raza = observables[0];
        const imagen = observables[1];
        raza.avatar = imagen;
        return of(raza);
      }),
      toArray(),
      map(array =>  array.sort((a, b) => a.nombre < b.nombre ? -1 : 1))
    );
  }

  findRandomImagenByNombreRaza(nombre: string): Observable<string> {
    return this.apiService.findImagenesByRazaRandom(nombre).pipe(
      map(response => response.message)
    );
  }
}
