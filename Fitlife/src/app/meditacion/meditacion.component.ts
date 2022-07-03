import { Component, OnInit } from '@angular/core';

import {Video} from '../video';
import {default as VideosMeditacion} from '../listaVideo.json'


@Component({
  selector: 'app-meditacion',
  templateUrl: './meditacion.component.html',
  styleUrls: ['./meditacion.component.scss']
})
export class MeditacionComponent implements OnInit {
  flag:number = 0;
  constructor() { }

  ngOnInit(): void {    

  }
  
  public ListarVideos()
  {

    let i:number;
    let listaDeVideos:any = document.getElementById("Todas las meditaciones");
    let li:any=document.createElement("li");
    let meditacion = VideosMeditacion;
    if(this.flag == 0){
      for(i=0;i<meditacion.listaVideosMeditacion.length;i++)
      {
      let li:any=document.createElement("li");
      listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${meditacion.listaVideosMeditacion[i].link}">` ;      
      }
      this.flag = 1
    }
    
  }

}
