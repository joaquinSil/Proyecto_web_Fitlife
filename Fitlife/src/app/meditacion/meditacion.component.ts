import { Component, OnInit } from '@angular/core';

import {Video} from '../video';
import {default as VideosMeditacion} from '../listaVideo.json'


@Component({
  selector: 'app-meditacion',
  templateUrl: './meditacion.component.html',
  styleUrls: ['./meditacion.component.scss']
})
export class MeditacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let listaVideosMeditacion = Array <Video>();

    /*listaVideosMeditacion =[
      {
        "nombre":"Meditación con Mantras",
        "link":"https://www.youtube.com/embed/rUXYKagk8go" ,
        "ranking":0,
        "id":1,
      },    
      {
        "nombre":"Meditación Vipassana",
        "link":"https://www.youtube.com/embed/1jkUKeR4m5A",
        "ranking":0,
        "id":2,
      },   
      {
        "nombre":"Meditación Zen",
        "link":"https://drive.google.com/file/d/1O8VTe6UyzD-tcVwpqAS7AvQgGzUYOyq0/preview" ,
        "ranking":0,
        "id":3,
      },    
    ]*/

    function ListarVideos()
    {
      let i:number;
      let listaDeVideos:any = document.getElementById("Todas las meditaciones");
      let li:any=document.createElement("li");
      let meditacion = VideosMeditacion;
      for(i=0;i<meditacion.listaVideosMeditacion.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${meditacion.listaVideosMeditacion[i].link}">` ;      
      }
    }
    window.addEventListener("load" ,ListarVideos);

  }

}
