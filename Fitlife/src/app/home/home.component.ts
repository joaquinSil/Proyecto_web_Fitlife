import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {

  }

}
