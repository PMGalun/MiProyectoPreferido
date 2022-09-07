import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { RedessocialesComponent } from './componentes/redessociales/redessociales.component';
import { HyHComponent } from './componentes/hy-h/hy-h.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    RedessocialesComponent,
    HyHComponent,
    EducacionComponent,
    BannerComponent,
    LogoAPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
