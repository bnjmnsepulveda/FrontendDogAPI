import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subraza } from 'src/app/model/domain';
import { ActivatedRoute } from '@angular/router';
import { RazaService } from 'src/app/services/raza.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle-subraza',
  templateUrl: './detalle-subraza.component.html',
  styleUrls: ['./detalle-subraza.component.css']
})
export class DetalleSubrazaComponent implements OnInit,OnDestroy {

  subraza: Subraza;
  private subscripcionSubraza: Subscription;

  constructor(
    private razaService: RazaService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscripcionSubraza = this.activedRoute.params
    .pipe(
      switchMap(
        params => this.razaService.findSubrazaByNombre(params.raza, params.subraza)
      )
    )
    .subscribe(
      subraza => this.subraza = subraza,
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    this.subscripcionSubraza.unsubscribe();
  }

}
