import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Raza } from 'src/app/model/domain';

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

  constructor() { }

  ngOnInit() {
  }

  onSeleccionarRaza(raza: Raza) {
    this.seleccionarRaza.emit(raza);
  }
}
