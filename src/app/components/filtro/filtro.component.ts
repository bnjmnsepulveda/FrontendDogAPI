import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Raza } from 'src/app/model/domain';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  checkRaza = true;
  checkSubraza = true;
  filtro: string;
  @Input()
  razas: Raza[];
  @Output()
  filtrarRazas = new EventEmitter<Raza[]>();
  @Output()
  limpiarFiltro = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFiltrar() {
    const busqueda = this.filtro.toLocaleLowerCase().trim();
    this.razas.filter(raza => {
      const filtroRaza = this.checkRaza && raza.nombre.toLocaleLowerCase().includes(busqueda);
      // raza.subrazas.filter(subraza => )
      return filtroRaza;
    });
  }

  onLimpiarFiltro() {
    this.limpiarFiltro.emit();
  }

}
