import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsuariosCambioClave } from '../usuario-cambio-clave';
import { Usuarios } from '../usuarios';
import { PuenteEntreComponentesService } from '../puente-entre-componentes.service';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.scss']
})
export class CambiarClaveComponent implements OnInit {

  formularioCambioClave:FormGroup;
  
  constructor(public formR:FormBuilder,public formL:FormBuilder, private puenteComponentes:PuenteEntreComponentesService, private backEnd:ServicioService, private router:Router) { 
    
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
    var claveIngresara:String = this.puenteComponentes.getCorreoUsuario();
    this.backEnd.getVerificacion({
      
      "correo":this.puenteComponentes.getCorreoUsuario(),
      "clave":this.formularioCambioClave.get("claveActualIngresada")?.value

    }).subscribe(respuesta=>{
      console.log(respuesta);
      if(respuesta != "F"){
      this.backEnd.putContraseña({
        "correo":this.puenteComponentes.getCorreoUsuario(),
        "claveActualIngresada":this.formularioCambioClave.get("claveActualIngresada")?.value,
        "claveIngresada":this.formularioCambioClave.get("claveIngresada")?.value,
        "claveEncriptada":this.puenteComponentes.getclave()
    
      }).subscribe(datos =>{
        if(datos == "V"){
          window.alert("Contraseña cambiada")
          this.router.navigate(['/home']);
        }else{
          window.alert("Verifique sus datos e intente nuevamente")
          this.router.navigate(['/home']);
        }
      })
      }else{
        window.alert("Verifique sus datos e intente nuevamente")  
      }
    });
  }
}
