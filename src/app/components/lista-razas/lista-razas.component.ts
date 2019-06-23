import { Component, OnInit } from '@angular/core';
import { RazaService } from 'src/app/services/raza.service';
import { switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Raza } from 'src/app/model/domain';

@Component({
  selector: 'app-lista-razas',
  templateUrl: './lista-razas.component.html',
  styleUrls: ['./lista-razas.component.css']
})
export class ListaRazasComponent implements OnInit {

  razas: Raza[];

  constructor(
    private razaService: RazaService
    ) { }

  ngOnInit() {
    this.razaService.findAll()
    .subscribe(
      razas =>  this.razas = razas ,
      error => console.log(error)
    );
  }

}
