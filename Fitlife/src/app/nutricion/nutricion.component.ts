import { Component, OnInit } from '@angular/core';

import {Video} from '../video';
import {default as VideosNutricion} from '../listaVideo.json'
//import { truncate } from 'fs';


@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.component.html',
  styleUrls: ['./nutricion.component.scss']
})
export class NutricionComponent implements OnInit {

  flag:number = 0;

  constructor() { }

  ngOnInit(): void { }

  public resultado(){

    let alturaMt = null;
    let imc = null;
    let errores = '';
    
    let pesoHtml:any = document.getElementById("peso");
    let peso:any=pesoHtml.value;
    
    let alturaHtml:any = document.getElementById("altura");
    let altura:any=alturaHtml.value;
    
    if ((peso) == 0) {
      errores += 'Escriba su peso en Kg ';
    }

    if ((altura) == 0) {
      errores += 'Escriba su altura en cm ';
    }

    if (errores == '') {

      alturaMt = (altura)/100;
      imc = peso / ((alturaMt) * (alturaMt));
      
      errores += 'Su IMC es de: ' + imc.toFixed(2) + ' ';
      if (imc < 18.5) {
          errores += 'Usted tiene bajo peso, se le recomienda que aumente su masa';
      }
      else {
        if (imc < 24.9) {
            errores += 'Usted tiene un buen peso, se le recomienda que lo mantenga';
        }
        else {                
            errores += 'Usted tiene sobre peso, se le recomienda que baje su masa corporal';
        }
      }

      alert(errores);
    }
    else {
      alert(errores);
    }
  };
  
  public ListarVideos(){
    let i:number;
    let listaDeVideos:any = document.getElementById("Todas las rutinasA");
    let li:any=document.createElement("li");
    let nutricion = VideosNutricion;
    if(this.flag == 0){
      for(i=0;i<2;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${nutricion.listaVideosNutricion[i].link}" >` ;  
      }

      listaDeVideos= document.getElementById("Todas las rutinasB");

      for(i=2;i<nutricion.listaVideosNutricion.length;i++)
      {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${nutricion.listaVideosNutricion[i].link}" >` ;  
      }
      this.flag =1;
    }
    
  }
}
