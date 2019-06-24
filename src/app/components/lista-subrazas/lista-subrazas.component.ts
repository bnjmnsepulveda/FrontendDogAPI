import { Subraza } from 'src/app/model/domain';
import { Raza } from './../../model/domain';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-subrazas',
  templateUrl: './lista-subrazas.component.html',
  styleUrls: ['./lista-subrazas.component.css']
})
export class ListaSubrazasComponent implements OnInit {

  @Input()
  raza: Raza;
  @Output()
  seleccionarSubraza = new EventEmitter<Subraza>();

  constructor() { }

  ngOnInit() {
  }

  onSeleccionarSubraza(nombre: string) {
    const subraza: Subraza = {
      raza: this.raza.nombre,
      nombre : nombre
    };
    this.seleccionarSubraza.emit(subraza);
  }

}
