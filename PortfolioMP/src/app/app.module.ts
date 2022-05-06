import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { InformacionComponent } from './Componentes/informacion/informacion.component';
import { ExperiencialaboralComponent } from './Componentes/experiencialaboral/experiencialaboral.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { GraficosComponent } from './Componentes/graficos/graficos.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InformacionComponent,
    ExperiencialaboralComponent,
    EstudiosComponent,
    GraficosComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
