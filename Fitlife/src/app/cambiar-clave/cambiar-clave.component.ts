import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuariosCambioClave } from '../usuario-cambio-clave';
import { Usuarios } from '../usuarios';
import { PuenteEntreComponentesService } from '../puente-entre-componentes.service';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.scss']
})
export class CambiarClaveComponent implements OnInit {

  formularioCambioClave:FormGroup;
  
  constructor(public formR:FormBuilder,public formL:FormBuilder, private puenteComponentes:PuenteEntreComponentesService, private backEnd:ServicioService) { 
    
    this.formularioCambioClave=this.formR.group({
      
      correo: "",
      claveActualIngresada: "",
      claveIngresada: "",
      claveEncriptada: "",
    })
    
  }

  ngOnInit(): void {
  }
  public cambiarClave(){
    var claveIngresara:String = this.formularioCambioClave.get("correo")?.value;
    this.backEnd.getVerificacion({
      
      "correo":this.formularioCambioClave.get("correo")?.value,
      "clave":this.formularioCambioClave.get("claveActualIngresada")?.value

    }).subscribe(respuesta=>{

      console.log(respuesta);
      this.backEnd.putContraseña({
        "correo":this.formularioCambioClave.get("correo")?.value,
        "claveActualIngresada":this.formularioCambioClave.get("claveActualIngresada")?.value,
        "claveIngresada":this.formularioCambioClave.get("claveIngresada")?.value,
        "claveEncriptada":this.puenteComponentes.getclave()
      }).subscribe(datos =>{
  
      })
    });
  
  }
}
