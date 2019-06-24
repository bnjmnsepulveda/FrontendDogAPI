import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { RazaService } from 'src/app/services/raza.service';
import { Router } from '@angular/router';
import { Raza, Subraza } from 'src/app/model/domain';
import { switchMap, tap, map, flatMap, concatAll, combineLatest, mergeAll, reduce, toArray } from 'rxjs/operators';
import { from, of, concat, forkJoin, merge, zip } from 'rxjs';

@Component({
  selector: 'app-contenedor-razas',
  templateUrl: './contenedor-razas.component.html',
  styleUrls: ['./contenedor-razas.component.css']
})
export class ContenedorRazasComponent implements OnInit {

  razas: Raza[];
  data: Raza[];

  constructor(
    private razaService: RazaService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {

    const razas$ = this.razaService
    .findAll()
    .subscribe(
      razas => {
        this.data = razas.slice();
        this.razas = razas;
      },
      error => console.log(error)
    );
  }

  onFiltarRazas(razas: Raza[]) {
    this.razas = razas;
  }

  onLimpiarFiltro(razas: Raza[]) {
    this.razas = this.data;
  }

  onSeleccionarRaza(raza: Raza) {
    this.router.navigate(['raza', raza.nombre]);
  }

  onSeleccionarSubraza(subraza: Subraza) {
    this.router.navigate(['subraza', subraza.raza, subraza.nombre]);
  }

}
