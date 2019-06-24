import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Raza, Subraza } from 'src/app/model/domain';

@Component({
  selector: 'app-lista-razas',
  templateUrl: './lista-razas.component.html',
  styleUrls: ['./lista-razas.component.css']
})
export class ListaRazasComponent implements OnInit {

  @Input()
  razas: Raza[];
  @Output()
  seleccionarRaza = new EventEmitter<Raza>();
  @Output()
  seleccionarSubraza = new EventEmitter<Subraza>();

  constructor() { }

  ngOnInit() {
  }

  onSeleccionarRaza(raza: Raza) {
    this.seleccionarRaza.emit(raza);
  }

  onSeleccionarSubraza(subraza: Subraza ) {
    this.seleccionarSubraza.emit(subraza);
  }
}
