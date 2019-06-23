import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaRazasComponent } from './components/lista-razas/lista-razas.component';

const routes: Routes = [{
  path: '',
  component: ListaRazasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
