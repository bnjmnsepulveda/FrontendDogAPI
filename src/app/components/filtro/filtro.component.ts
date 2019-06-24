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
  filtro = '';
  _razas: Raza[];
  @Input()
  data: Raza[];
  @Output()
  filtrarRazas = new EventEmitter<Raza[]>();
  @Output()
  limpiarFiltro = new EventEmitter<Raza[]>();

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set razas(razas: Raza[]) {
    this._razas = razas;
  }

  onFiltrar() {
    this._razas = this.data;
    const busqueda = this.filtro.toLocaleLowerCase().trim();
    if (busqueda.length === 0) {
      this.limpiarFiltro.emit(this.data);
      return;
    }
    console.log('busqueda=' + busqueda);
    const filtro = this._razas.filter(raza => {
      const filtroRaza = this.checkRaza && raza.nombre.toLocaleLowerCase().includes(busqueda);
      let filtroSubraza = false;
      if (this.checkSubraza) {
        for (let x = 0; x < raza.subrazas.length; x++) {
          if (raza.subrazas[x].toLowerCase().includes(busqueda)) {
            filtroSubraza = true;
            break;
          }
        }
      }
      return filtroRaza || filtroSubraza;
    });
    this.filtrarRazas.emit(filtro);
  }

  onLimpiarFiltro() {
    this.limpiarFiltro.emit(this.data);
  }

  onChangeRaza() {
    this.checkRaza = !this.checkRaza;
    this.onFiltrar();
  }

  onChageSubraza() {
    this.checkSubraza = !this.checkSubraza;
    this.onFiltrar();
  }

}
