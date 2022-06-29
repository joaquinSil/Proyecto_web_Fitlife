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
    console.log(this.puente.getUsuarioTotal()+"datos en header");
    this.backEnd.eliminarUsuario(this.puente.getUsuarioTotal());
  }
}
