import { Component, OnInit } from '@angular/core';

import {Video} from '../video';
import {default as VideosNutricion} from '../listaVideo.json'


@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.component.html',
  styleUrls: ['./nutricion.component.scss']
})
export class NutricionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    

    function ListarVideos()
    {
      let i:number;
      let listaDeVideos:any = document.getElementById("todas las dietas");
      let li:any=document.createElement("li");
      let nutricion = VideosNutricion;
      console.log(nutricion) ;
      console.log(nutricion) ;
      for(i=0;i<nutricion.listaVideosNutricion.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${nutricion.listaVideosNutricion[i].link}">` ;      
      }
    }
    
    window.addEventListener("load" ,ListarVideos);
  }

}
