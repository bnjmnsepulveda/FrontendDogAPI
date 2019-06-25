import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Raza } from 'src/app/model/domain';
import { RazaService } from 'src/app/services/raza.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-raza',
  templateUrl: './detalle-raza.component.html',
  styleUrls: ['./detalle-raza.component.css']
})
export class DetalleRazaComponent implements OnInit, OnDestroy {

  raza: Raza;
  private subscripcionRaza: Subscription;

  constructor(
    private razaService: RazaService,
    private activedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.subscripcionRaza = this.activedRoute.params
    .pipe(
      switchMap(
        params => this.razaService.findByNombre(params.nombre)
      )
    )
    .subscribe(
      raza => this.raza = raza,
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    this.subscripcionRaza.unsubscribe();
  }
}
