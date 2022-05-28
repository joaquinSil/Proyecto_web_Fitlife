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
    NutricionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }