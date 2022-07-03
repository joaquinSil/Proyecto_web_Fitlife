import { Usuarios } from "./usuarios";

var express = require('express');
var session = require('express-session');
var cookie = require('cookie-parser');
var id = require('express-session-id');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
const {encriptar, comparar} = require('../js/encript.js')
var path = require('path');
var cors = require('cors');
var Client = require('pg');
var app = express()
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port: 3306,
  database : 'Fitlife'
});

connection.connect(function(err:any) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
 
  console.log('Connected as id: ' + connection.threadId);
});

app.use(cors());

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }))
const configuracion ={
  hostname: "127.0.0.1",
  port: 3000,
}

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(cookie('my secret key'));
app.use(id({
  idleTime: 10 * 1000 * 60, // 10 minutes
  cookie: {
    signed: true
  }
}));

//Obtener todas las filas
app.get('/getUsuarios',bodyParser.json(), (request:any, response:any) => {
  let clave=request.body.clave;
  connection.query("SELECT * from usuarios", function(error:any, results:any, fields:any){
    response.send(results);
  })
})
app.get('/getFormularios',bodyParser.json(), (request:any, response:any) => {
  connection.query("SELECT * from contacto", function(error:any, results:any, fields:any){
    response.send(results);
  })
})
//Obtener los datos de una fila segun el id
app.get('/getUsuario',bodyParser.json(), (request:any, response:any) => {
  let correo=request.body.correo;
  connection.query("select * from usuarios where correo=?", correo, function(error:any, result:any, fields:any){
    
    response.send(JSON.stringify(result));
  })
})
//Crear una fila
app.post('/crearUsuarios',bodyParser.json(),async (request:any,response:any)=>{
  let nombre=request.body.nombre;
  let correo=request.body.correo;
  let usuario=request.body.usuario;
  let clave=request.body.clave;
  let hash =  await encriptar(clave);

  connection.query("insert into usuarios (nombre,correo,usuario,clave) values(?,?,?,?)", [nombre,correo,usuario,hash], function(error:any, result:any, fields:any){
    if (error){
      response.send(JSON.stringify(`F`));
    }else{
      response.status(200).send(result);
    }
    
  })
});

app.post('/crearFormulario',bodyParser.json(),(request:any,response:any)=>{
  let nombre=request.body.nombre;
  let correo=request.body.correo;
  let asunto=request.body.asunto;
  let mensaje=request.body.mensaje;

  connection.query("insert into contacto (nombre,correo,asunto,mensaje) values(?,?,?,?)", [nombre,correo,asunto,mensaje], function(error:any, result:any, fields:any){
    response.send(JSON.stringify(`formulario creado ${result.insertId}`));
  })
});
//Actualizar una fila
app.put('/cambiarClave',bodyParser.json(),async (request:any, response:any) => {

  let correo = request.body.correo;
  let claveActualIngresada=request.body.claveActualIngresada;
  let claveIngresada=request.body.claveIngresada;
  let claveEncriptada=request.body.claveEncriptada;
  let xd = await comparar(claveActualIngresada, claveEncriptada);
  if(xd == true){
    let hash =  await encriptar(claveIngresada);
    connection.query("UPDATE `usuarios` SET clave=? WHERE correo=?",[hash,correo],(req1:any,res1:any)=>{
      response.send(JSON.stringify("V"));
    });
  }else{
    response.send(JSON.stringify("F"));
  }
});

app.post('/verificarClave',bodyParser.json() ,(request:any,response:any) => {
  let correo=request.body.correo;
  let clave=request.body.clave;
  connection.query('SELECT * FROM usuarios WHERE correo = ?', correo, async function(error:any, results:any, fields:any) {
    let claveencrip: any = results[0].clave
    let check = await comparar(clave, claveencrip)
    if(check == true){
      if (error) throw error;
      if (results.length > 0) {
        response.send(JSON.stringify(results));
      } 
    }	else {
      response.send(JSON.stringify("F"));
    }	 
    response.end();
  });

});

app.delete('/borrarUsuario/:correo',bodyParser.json() ,(request:any,response:any)=> {
  let correo=request.params.correo;
  connection.query("DELETE FROM `usuarios` WHERE correo=?",correo,(req1:any,res1:any)=>{
    response.send(JSON.stringify(`Usuario y/o Contraseña Incorrecta`));
  });
});

app.post('/LoginU', bodyParser.json(), function(request:any, response:any) {
	let correo = request.body.correo;
	let clave = request.body.clave;
	if (correo && clave) {
		connection.query('SELECT * FROM usuarios WHERE correo = ?', correo, async function(error:any, results:any, fields:any) {
      if(results[0] != undefined){
        let claveencrip: any = results[0].clave;
        let check = await comparar(clave, claveencrip);
        if(check == true){
        if (error) throw error;
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = correo;
          console.log("Identificador de sesión:", request.sessionID);
          response.send(JSON.stringify(results));
        } 
        }	else {
          response.send(JSON.stringify(`F`));
        }	 
      }
      else{
        response.send(JSON.stringify(`F`));
      }
      
			response.end()
		});
	} else {
		response.send(JSON.stringify(`F`));
		response.end();
	}
});

app.listen(configuracion, () => {
  console.log(`Example app listening on port ${configuracion}`)
})