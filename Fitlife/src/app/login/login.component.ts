import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../usuarios';
import TreeMap from "ts-treemap";
import { PuenteEntreComponentesService } from '../puente-entre-componentes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  formularioRegistro:FormGroup;
  formularioLogIn:FormGroup;
  datosHtml:Usuarios;
  mostrarFormulario:boolean = false;
  //datosHTML = new TreeMap<string, Usuarios>()
  datosHTML:Array<Usuarios>=[];
  datosUsuarioLogIn:Usuarios;
  constructor(public formR:FormBuilder,public formL:FormBuilder, private servicio:ServicioService, private puenteComponentes:PuenteEntreComponentesService, private router:Router) { 
    this.datosHtml = ({
      nombre: "asd",
      correo: "asd",
      usuario: "asd",
      clave: "asd",
      admin: false
    })
    this.datosUsuarioLogIn = ({
      nombre: "asd",
      correo: "asd",
      usuario: "asd",
      clave: "asd",
      admin: false
    })
    this.formularioLogIn=this.formL.group({
      correo: ["", Validators.required],
      clave: ["", Validators.required],
    })
    this.formularioRegistro=this.formR.group({
      
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

      if (window.innerWidth > 950){
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
    this.servicio.postUsuarios({
      
      "nombre":this.formularioRegistro.get("nombre")?.value,
      "correo":this.formularioRegistro.get("correo")?.value,
      "usuario":this.formularioRegistro.get("usuario")?.value,
      "clave":this.formularioRegistro.get("clave")?.value,
      "admin":false

    }).subscribe(respuesta=>{
      console.log(respuesta);
      if(respuesta[0] == "F"){
        window.alert("El usuario o correo ya existe en la plataforma")
      }
      else{
        window.alert("Usuario registrado")
        this.ngOnInit();
      }
    });
  }
  
  public usuariosInicioS(){
    this.servicio.postInicioS({
      "correo":this.formularioLogIn.get("correo")?.value,
      "clave":this.formularioLogIn.get("clave")?.value
    }).subscribe(respuesta=>{
        if(respuesta[0] != "F" ){
        console.log(respuesta[0]);
        console.log("Sesión iniciada");
        window.alert("Sesión iniciada");
        
        this.datosUsuarioLogIn = respuesta[0];
        this.puenteComponentes.setUsuario(this.datosUsuarioLogIn?.nombre);
        this.puenteComponentes.setclave(this.datosUsuarioLogIn?.clave);
        this.puenteComponentes.setNombreUsuario(this.datosUsuarioLogIn?.usuario);
        this.puenteComponentes.setConectado(true);
        this.puenteComponentes.setCorreoUsuario(this.datosUsuarioLogIn?.correo);
        if(this.datosUsuarioLogIn?.admin == true){
          this.puenteComponentes.setEstadoAdmin(true);
          this.router.navigate(['/home']);
        }else{
          this.puenteComponentes.setEstadoAdmin(false);
          this.router.navigate(['/home']);
        }
      }
      else{
        window.alert("ERROR al iniciar puede que su contraseña o correo sean incorrectos intente nuevamente");
      }
      
      
      
    });
  }
  public xd(){
    window.location.href="/home"
  }
}
