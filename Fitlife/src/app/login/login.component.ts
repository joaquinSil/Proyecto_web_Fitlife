import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  formulario:FormGroup;
  constructor(public formB:FormBuilder, private servicio:ServicioService) { 
    this.formulario=this.formB.group({
      
      nombre: ["", [Validators.required, Validators.maxLength(10)]],
      correo: ["", Validators.required],
      usuario: ["", Validators.required],
      clave: ["", Validators.required],
      admin: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    
    document.getElementById("btn__iniciar-sesion")?.addEventListener("click", iniciarSesion);
    document.getElementById("btn__registrarse")?.addEventListener("click", register);
    window.addEventListener("resize", anchoPage);


    //Declarando variables
    var formulario_login:any = document.querySelector(".formulario__login");
    var formulario_register:any = document.querySelector(".formulario__register");
    var contenedor_login_register:any = document.querySelector(".contenedor__login-register");
    var caja_trasera_login:any = document.querySelector(".caja__trasera-login");
    var caja_trasera_register:any = document.querySelector(".caja__trasera-register");

    //FUNCIONES

    function anchoPage(){

      if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
      }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
      }
    }

    anchoPage();

      function iniciarSesion(){
        if (window.innerWidth > 850){

          formulario_login.style.display = "block";
          contenedor_login_register.style.left = "10px";
          formulario_register.style.display = "none";
          caja_trasera_register.style.opacity = "1";
          caja_trasera_login.style.opacity = "0";

        }else{

          formulario_login.style.display = "block";
          contenedor_login_register.style.left = "0px";
          formulario_register.style.display = "none";
          caja_trasera_register.style.display = "block";
          caja_trasera_login.style.display = "none";

        }
      }

    function register(){

      if (window.innerWidth > 850){

        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";

      }else{

        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";

      }

    }
    
   
    
  }
  public generarNuevoUsuario(){
    this.servicio.postFormulario({
      
      "nombre":this.formulario.get("nombre")?.value,
      "correo":this.formulario.get("correo")?.value,
      "usuario":this.formulario.get("usuario")?.value,
      "clave":this.formulario.get("clave")?.value,
      "admin":false

    }).subscribe(respuesta=>{
      console.log(respuesta);
    });
  }
  
}
