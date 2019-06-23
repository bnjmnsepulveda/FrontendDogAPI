import { Component, OnInit } from '@angular/core';
import { RazaService } from 'src/app/services/raza.service';
import { Raza } from 'src/app/model/domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-razas',
  templateUrl: './lista-razas.component.html',
  styleUrls: ['./lista-razas.component.css']
})
export class ListaRazasComponent implements OnInit {

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
}
