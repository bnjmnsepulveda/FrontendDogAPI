import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  columnas = 4;
  contenedorImagenes: ContenedorImagen[] = [];

  @Input()
  set imagenes(imagenes: string[]) {
    let cont = 1;
    let imgs = [];
    imagenes.forEach(i => {
      imgs.push(i);
      if (cont === this.columnas) {
        this.contenedorImagenes.push({
          imagenes: imgs
        });
        imgs = [];
        cont = 1;
      } else {
        cont++;
      }
    });
    if (imgs.length > 0) {
      this.contenedorImagenes.push({
        imagenes: imgs
      });
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface ContenedorImagen {
  imagenes: string[];
}
