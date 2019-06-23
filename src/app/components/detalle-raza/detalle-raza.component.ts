import { Component, OnInit, Input } from '@angular/core';
import { Raza } from 'src/app/model/domain';
import { RazaService } from 'src/app/services/raza.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-raza',
  templateUrl: './detalle-raza.component.html',
  styleUrls: ['./detalle-raza.component.css']
})
export class DetalleRazaComponent implements OnInit {

  @Input()
  raza: Raza;

  constructor(
    private razaService: RazaService,
    private activedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activedRoute.params
    .pipe(
      switchMap(params => this.razaService.findByNombre(params.nombre))
    ).subscribe(raza => {
      console.log(JSON.stringify(raza));
      this.raza = raza;
    });
  }

}
