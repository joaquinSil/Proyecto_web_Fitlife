import { Injectable } from '@angular/core';
import { Usuarios } from './usuarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {enableProdMode} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Formularios } from './formularios';
import { UsuarioLog } from './usuario-log';
import { UsuariosCambioClave } from './usuario-cambio-clave';

const httpOptions  ={ 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  constructor(private http:HttpClient) {

  }
  servidor="http://127.0.0.1:3000";
  getUsuarios():Observable<any>{
    return this.http.get(`${this.servidor}/getUsuarios`);
  }
  getFormularios():Observable<any>{
    return this.http.get(`${this.servidor}/getFormularios`);
  }
  postUsuarios(datos:Usuarios):Observable<any>{
    console.log(datos);
    return this.http.post(`${this.servidor}/crearUsuarios`,JSON.stringify(datos),httpOptions);
  }
  postFormulario(datos:Formularios):Observable<any>{
    console.log(datos);
    return this.http.post(`${this.servidor}/crearFormulario`,JSON.stringify(datos),httpOptions);
  }
  /*enviarDatos(datos:Usuarios){//enviar los datos al back-end
    console.log(JSON.stringify(datos));
  }*/
  eliminarUsuario(correo:String):Observable<any>{
    console.log(correo);
    return this.http.delete( `${this.servidor}/borrarUsuario/${correo}`, httpOptions );
  }
  postInicioS(datos:UsuarioLog):Observable<any>{
    console.log(datos);
    return this.http.post(`${this.servidor}/LoginU`,JSON.stringify(datos),httpOptions);
  }

  getVerificacion(datos:UsuarioLog):Observable<any> {
    console.log(datos);
    return this.http.post(`${this.servidor}/verificarClave`,JSON.stringify(datos),httpOptions);
  }
  putContraseña(datos:UsuariosCambioClave):Observable<any> {
    console.log(datos);
    return this.http.put(`${this.servidor}/cambiarClave`,JSON.stringify(datos),httpOptions);
  }

}
