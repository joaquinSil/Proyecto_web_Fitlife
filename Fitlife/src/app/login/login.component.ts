import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../usuarios';
import TreeMap from 'ts-treemap'
import { PuenteEntreComponentesService } from '../puente-entre-componentes.service';

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
  datosHTML = new TreeMap<string, Usuarios>()
  //datosHTML:Array<Usuarios>=[];
  constructor(public formR:FormBuilder,public formL:FormBuilder, private servicio:ServicioService, private puenteComponentes:PuenteEntreComponentesService) { 
    this.datosHtml = ({
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
  private validacion(flag:number){
    if(flag == 101){
      //this.mostrarFormulario = 101;
    }
  }
  public iniciarSecionUsuario(){
    this.servicio.getUsuarios().subscribe(datosBackEnd=>{
      for(let i=0; i<datosBackEnd.length ;i++)
      {
        this.datosHTML.set(datosBackEnd[i].correo,datosBackEnd[i]);
      }
      var correo = this.formularioLogIn.get("correo")?.value;
      var clave = this.formularioLogIn.get("clave")?.value;
      var datosUsuario = this.datosHTML.get(correo) ;
      if(correo != this.datosHTML.get(correo)?.correo){
        console.log("correo incorrecto o clave incorrecta");
        
      }
      if(clave != this.datosHTML.get(correo)?.clave){
        
        console.log("correo incorrecto o clave incorrecta");
      }
      if(correo == datosUsuario?.correo && clave == datosUsuario?.clave){
        console.log("Sesion Iniciada")
        if(datosUsuario?.admin == true){
          this.puenteComponentes.setEstadoAdmin(true);
        }else{
          this.puenteComponentes.setEstadoAdmin(false);
        }
        //console.log(datosUsuario?.admin);
        
      }
    });
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
    });
  }
  
 
}
