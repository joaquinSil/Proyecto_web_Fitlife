import { Component, OnInit } from '@angular/core';

import {Video} from '../video';
import {default as VideosNutricion} from '../listaVideo.json'


@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.component.html',
  styleUrls: ['./nutricion.component.scss']
})
export class NutricionComponent implements OnInit {
  flag:number = 0;
  constructor() { }

  ngOnInit(): void {

    /*let calculadora:any = document.getElementById("formulario");

    let alturaMt = null;
    let imc = null;
    let errores = '';

    calculadora.addEventListener("submit", function (evento:any) {
      //evento.preventDefault();
      let peso:any = document.getElementById("peso");
      let altura:any = document.getElementById("altura");
      //evento.preventDefault();

      console.log(peso);
      if ((peso) == null) {
        errores += 'Escriba su peso en Kg ';
        console.log(peso);
        //$('#mensaje').css("border-bottom-color","#F14B4B")
      }
      console.log(peso);
      console.log(altura);

      if ((altura) == null) {
        console.log(altura);
        errores += 'Escriba su altura en cm ';
        //$('#mensaje').css("border-bottom-color","#F14B4B")
      }
      console.log(altura);
      if (errores == '') {

        alturaMt = (altura)/100;
        imc = peso / ((alturaMt) * (alturaMt));
        errores += 'Su IMC es de :' + imc + ' ';
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
    });*/
    

    
    
    //window.addEventListener("load" ,ListarVideos);
  }
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
