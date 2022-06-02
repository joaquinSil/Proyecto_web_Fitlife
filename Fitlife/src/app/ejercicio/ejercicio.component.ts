import { Component, OnInit } from '@angular/core';

import {Video} from '../video';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let listaVideosDestacadosEjercicios = Array <Video>();
    let listaVideosEjercicios = Array <Video>();

    listaVideosDestacadosEjercicios =[
    {
      "nombre":"Rutina de abdomen",
      "link":"https://drive.google.com/file/d/1pWN8cGyarrqfL06FXxA5i8p74_lkImll/preview",
      "ranking":3,
      "id":1,
    },    
    {
      "nombre":"Rutina de piernas",
      "link":"https://www.youtube.com/embed/nKmH2Laeirk",
      "ranking":3,
      "id":2,
    },   
    {
      "nombre":"Rutina de brazos",
      "link":"https://www.youtube.com/embed/HFm4mVhXCFI" ,
      "ranking":3,
      "id":3,
    }   
    ];

    listaVideosEjercicios =[
    {
      "nombre":"Rutina de abdomen",
      "link":"https://drive.google.com/file/d/1pWN8cGyarrqfL06FXxA5i8p74_lkImll/preview",
      "ranking":3,
      "id":1,
    },    
    {
      "nombre":"Rutina de piernas",
      "link":"https://www.youtube.com/embed/nKmH2Laeirk",
      "ranking":3,
      "id":2,
    },   
    {
      "nombre":"Rutina de brazos",
      "link":"https://www.youtube.com/embed/HFm4mVhXCFI" ,
      "ranking":3,
      "id":3,
    },  
    {
      "nombre":"Rutina HITT 10 min",
      "link":"https://www.youtube.com/embed/3A_27w5CR6A" ,
      "ranking":3,
      "id":4,
    },    
    {
      "nombre":"Rutina HITT 20 min",
      "link":"https://drive.google.com/file/d/1VzQ432GzFU1xBIeqpqEEoo-i1MeGUl0a/preview",
      "ranking":3,
      "id":5,
    },   
    {
      "nombre":"Rutina HITT 30 min",
      "link":"https://drive.google.com/file/d/12zal_N-672gMhi4sjjSP2x_d2Vy-KFqm/preview"  ,
      "ranking":3,
      "id":6,
    }    
    ];
    function ListarVideosDestacados(){//aun no esta listo la funcinalidad de videos destacados
      let i:number;
      let listaDeVideos:any = document.getElementById("ejerciciosDestacados");
      let li:any=document.createElement("li");
      for(i=0;i<listaVideosDestacadosEjercicios.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${listaVideosDestacadosEjercicios[i].link}">` ;
      }
    }
    function ListarVideos(){//aun no esta listo la funcinalidad de videos destacados
      let i:number;
      let listaDeVideos:any = document.getElementById("Todas las rutinas");
      let li:any=document.createElement("li");
      for(i=0;i<listaVideosEjercicios.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${listaVideosEjercicios[i].link}">` ;      
      }
    }

    window.addEventListener("load" ,ListarVideosDestacados);
    window.addEventListener("load" ,ListarVideos);
  }

}
