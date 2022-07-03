import { Component, OnInit } from '@angular/core';
import { PuenteEntreComponentesService } from '../puente-entre-componentes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fotos=[
    {"id":1,"ruta":"ejercicio1.jpg"},
    {"id":2,"ruta":"ejercicio2.jpg"},
    {"id":3,"ruta":"naranja.jpg"}
  ]
  constructor(private puente:PuenteEntreComponentesService) { }

  ngOnInit(): void {

  }
  public getConectadoActual(){   
    return this.puente.getConectado();
  }
}
