import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeditacionComponent } from './meditacion/meditacion.component';
import { NutricionComponent } from './nutricion/nutricion.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"ejercicio", component:EjercicioComponent},
  {path:"meditacion", component:MeditacionComponent},
  {path:"nutricion", component:NutricionComponent},
  {path:"cambio contraseña", component:CambiarClaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
