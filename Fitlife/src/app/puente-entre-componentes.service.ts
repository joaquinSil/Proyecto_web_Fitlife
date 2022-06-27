import { Injectable } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuenteEntreComponentesService {
  //@Output() Puente: EventEmitter<any> = new EventEmitter();
  adminConectado :boolean = false;
  constructor() { }
 
  public setEstadoAdmin(estadoAdmin:boolean){
    this.adminConectado = estadoAdmin;
  }
  public getEstadoAdmin(){
    return this.adminConectado;
  }
}
