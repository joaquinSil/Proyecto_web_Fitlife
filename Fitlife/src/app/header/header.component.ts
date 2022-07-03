import { Component, OnInit } from '@angular/core';
import { PuenteEntreComponentesService } from '../puente-entre-componentes.service';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../usuarios';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private puente:PuenteEntreComponentesService, private backEnd:ServicioService) { }

  ngOnInit(): void {
    document.getElementById("cambiarClave")?.addEventListener("click", cambiarClave);

    function cambiarClave(){
      
    }
  }

  public getConectadoActual(){   
    return this.puente.getConectado();
  }
  public getUsuario(){    
    return this.puente.getNombreUsuario();
  }
  public eliminarCuenta(){
    //let usuarioEliminar:Usuarios;
    //usuarioEliminar.admin = this.puente.getE)
    //console.log(this.puente.getUsuarioTotal());
    this.backEnd.eliminarUsuario(this.puente.getUsuarioTotal().correo).subscribe(data =>{
      console.log("Usuario eliminado");
      this.puente.setConectado(false);
      alert("Su cuenta a sido borrada");
    });

  }
  public cerrarSesion(){
    this.puente.setConectado(false);
    this.puente.setCorreoUsuario("");
    this.puente.setNombreUsuario("");
    this.puente.setclave("");
    this.puente.setUsuario("");
    alert("Usted a cerrado sesion con exito")
    window.location.href="/home"
  }
  public cambiarClave(){
    
  }
}
