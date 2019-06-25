import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRazasComponent } from './components/lista-razas/lista-razas.component';
import { DetalleRazaComponent } from './components/detalle-raza/detalle-raza.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { ContenedorRazasComponent } from './components/contenedor-razas/contenedor-razas.component';
import { ApiErrorhandler } from './services/error-handler';
import { DetalleSubrazaComponent } from './components/detalle-subraza/detalle-subraza.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { ListaSubrazasComponent } from './components/lista-subrazas/lista-subrazas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaRazasComponent,
    DetalleRazaComponent,
    FiltroComponent,
    ContenedorRazasComponent,
    DetalleSubrazaComponent,
    ImagenesComponent,
    ListaSubrazasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ApiErrorhandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
