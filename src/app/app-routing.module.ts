import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaRazasComponent } from './components/lista-razas/lista-razas.component';
import { DetalleRazaComponent } from './components/detalle-raza/detalle-raza.component';

const routes: Routes = [{
  path: '',
  component: ListaRazasComponent
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
