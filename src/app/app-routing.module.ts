import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleRazaComponent } from './components/detalle-raza/detalle-raza.component';
import { ContenedorRazasComponent } from './components/contenedor-razas/contenedor-razas.component';

const routes: Routes = [{
  path: '',
  component: ContenedorRazasComponent
},
{
  path: 'raza/:nombre',
  component: DetalleRazaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
