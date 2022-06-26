import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../usuarios';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  datosHTML:Array<Usuarios>=[];
  constructor(private servicio:ServicioService) { }


  ngOnInit(): void {
    this.servicio.getFormularios().subscribe(datosBackEnd=>{
      for(let i=0; i<datosBackEnd.length ;i++)
      {
        this.datosHTML.push(datosBackEnd[i]);
      }
  });
  }


}
