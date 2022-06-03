import { Component, OnInit } from '@angular/core';

import {Video} from '../video';
import {default as VideosEjercicios} from '../listaVideo.json'

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
    function ListarVideosDestacados(){//aun no esta listo la funcinalidad de videos destacados
      let i:number;
      let listaDeVideos:any = document.getElementById("ejerciciosDestacados");
      let li:any=document.createElement("li");
      let ejercicio = VideosEjercicios;
      for(i=0;i<ejercicio.listaVideosDestacadosEjercicios.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${ejercicio.listaVideosDestacadosEjercicios[i].link}">` ;
      }
    }
    function ListarVideos(){//aun no esta listo la funcinalidad de videos destacados
      let i:number;
      let listaDeVideos:any = document.getElementById("Todas las rutinas");
      let li:any=document.createElement("li");
      let ejercicio = VideosEjercicios;
      for(i=0;i<ejercicio.listaVideosEjercicios.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${ejercicio.listaVideosEjercicios[i].link}">` ;      
      }
    }

    window.addEventListener("load" ,ListarVideosDestacados);
    window.addEventListener("load" ,ListarVideos);
  }

}
