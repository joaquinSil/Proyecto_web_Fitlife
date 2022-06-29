import { Injectable } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class PuenteEntreComponentesService {
  
  //@Output() Puente: EventEmitter<any> = new EventEmitter();
  private nombreUsuario :String = "";
  private correoUsuario:String = "";
  private claveUsuario:String = "";
  private nombreCompleto:String = "";
  private adminConectado :boolean = false;
  private usuarioConectado:boolean = false;
  private Ausuario: Usuarios;
  constructor() {
    this.Ausuario = ({
      nombre: "asd",
      correo: "asd",
      usuario: "asd",
      clave: "asd",
      admin: false
    })

  }
  public getUsuarioTotal(){
    
    this.Ausuario.admin = this.getEstadoAdmin();
    this.Ausuario.clave = this.getclave();
    this.Ausuario.correo = this.getCorreoUsuario();
    this.Ausuario.nombre = this.getNombreUsuario();
    this.Ausuario.usuario = this.getUsuario();
    console.log(this.Ausuario);
    return this.Ausuario;
  }
  public setclave(clave:any) {
    this.claveUsuario = clave;
  }
  public getclave(){
    return this.claveUsuario;
  }
  public setUsuario(nombreCompleto:any) {
    this.nombreCompleto = nombreCompleto;
  }
  public getUsuario(){
    return this.nombreCompleto;
  }
  public setConectado(estadoConexion:boolean){
    this.usuarioConectado = estadoConexion;
  }
  public getConectado(){
    return this.usuarioConectado;
  }
  public setEstadoAdmin(estadoAdmin:boolean){
    this.adminConectado = estadoAdmin;
  }
  public getEstadoAdmin(){
    return this.adminConectado;
  }
  public setNombreUsuario(Usuario:any){
    this.nombreUsuario = Usuario;
  }
  public getNombreUsuario(){
    return this.nombreUsuario;
  }
  public setCorreoUsuario(correo:any){
    this.correoUsuario = correo;
  }
  public getCorreoUsuario(){
    return this.correoUsuario;
  }
  
  
}
