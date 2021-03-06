import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeditacionComponent } from './meditacion/meditacion.component';
import { NutricionComponent } from './nutricion/nutricion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    EjercicioComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MeditacionComponent,
    NutricionComponent,
    CambiarClaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
