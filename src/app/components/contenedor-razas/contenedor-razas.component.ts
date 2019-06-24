import { Component, OnInit } from '@angular/core';
import { RazaService } from 'src/app/services/raza.service';
import { Router } from '@angular/router';
import { Raza, Subraza } from 'src/app/model/domain';

@Component({
  selector: 'app-contenedor-razas',
  templateUrl: './contenedor-razas.component.html',
  styleUrls: ['./contenedor-razas.component.css']
})
export class ContenedorRazasComponent implements OnInit {

  razas: Raza[];

  constructor(
    private razaService: RazaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.razaService
    .findAll()
    .subscribe(
      razas =>  this.razas = razas ,
      error => console.log(error)
    );
  }

  onSeleccionarRaza(raza: Raza) {
    this.router.navigate(['raza', raza.nombre]);
  }

  onSeleccionarSubraza(subraza: Subraza) {
    this.router.navigate(['subraza', subraza.raza, subraza.nombre]);
  }

}
