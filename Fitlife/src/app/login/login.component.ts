import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  constructor() {}

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

}
