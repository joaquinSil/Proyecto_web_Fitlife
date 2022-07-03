import { Component, OnInit } from '@angular/core';

import {default as VideosEjercicios} from '../listaVideo.json'

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent implements OnInit {
  flag1:number = 0;
  flag2:number = 0;
  constructor() {}

  ngOnInit(): void {

  }
  public ListarVideosDestacados(){
    let i:number;
    let listaDeVideos:any = document.getElementById("ejerciciosDestacados");
    let li:any=document.createElement("li");
    let ejercicio = VideosEjercicios;
    if(this.flag1 == 0){
      for(i=0;i<ejercicio.listaVideosDestacadosEjercicios.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${ejercicio.listaVideosDestacadosEjercicios[i].link}">` ;
      }
      this.flag1 = 1;
    }
   
  }
  public ListarVideos(){
    let i:number;
    let listaDeVideos:any = document.getElementById("Todas las rutinasA");
    let li:any=document.createElement("li");
    let ejercicio = VideosEjercicios;
    
    if(this.flag2 == 0){
      for(i=0;i<3;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${ejercicio.listaVideosEjercicios[i].link}">` ;      
      }  
      listaDeVideos= document.getElementById("Todas las rutinasB");  
      for(i=3;i<ejercicio.listaVideosEjercicios.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${ejercicio.listaVideosEjercicios[i].link}">` ;      
      }
      this.flag2 = 1;
    }
  }
}
