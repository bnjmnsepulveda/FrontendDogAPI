import { Component, OnInit, OnDestroy } from '@angular/core';
import { RazaService } from 'src/app/services/raza.service';
import { Router } from '@angular/router';
import { Raza, Subraza } from 'src/app/model/domain';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contenedor-razas',
  templateUrl: './contenedor-razas.component.html',
  styleUrls: ['./contenedor-razas.component.css']
})
export class ContenedorRazasComponent implements OnInit , OnDestroy{

  razas: Raza[];
  data: Raza[];
  private subscripcionRazas: Subscription;

  constructor(
    private razaService: RazaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscripcionRazas = this.razaService
    .findAll()
    .subscribe(
      razas => {
        this.data = razas.slice();
        this.razas = razas;
      },
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    this.subscripcionRazas.unsubscribe();
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
