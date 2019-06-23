import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRazasComponent } from './components/lista-razas/lista-razas.component';
import { DetalleRazaComponent } from './components/detalle-raza/detalle-raza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaRazasComponent,
    DetalleRazaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
