import { Usuarios } from "./usuarios";

var express = require('express');
var session = require('express-session');
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
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
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


//Obtener todas las filas
app.get('/getUsuarios',bodyParser.json(), (request:any, response:any) => {
  let clave=request.body.clave;
  console.log(clave)
  connection.query("SELECT * from usuarios", function(error:any, results:any, fields:any){
    response.send(results);
  })
})
app.get('/getFormularios',bodyParser.json(), (request:any, response:any) => {
  console.log("xdd");
  connection.query("SELECT * from contacto", function(error:any, results:any, fields:any){
    response.send(results);
  })
})
//Obtener los datos de una fila segun el id
app.get('/getUsuario',bodyParser.json(), (request:any, response:any) => {
  //console.log("correo");
  let correo=request.body.correo;
  console.log(correo);
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
    response.send(JSON.stringify(`formulario creado`));
  })
});

app.post('/crearFormulario',bodyParser.json(),(request:any,response:any)=>{
  console.log("xddddd");
  let nombre=request.body.nombre;
  let correo=request.body.correo;
  let asunto=request.body.asunto;
  let mensaje=request.body.mensaje;
  console.log(nombre,correo,asunto,mensaje);

  connection.query("insert into contacto (nombre,correo,asunto,mensaje) values(?,?,?,?)", [nombre,correo,asunto,mensaje], function(error:any, result:any, fields:any){
    response.send(JSON.stringify(`formulario creado ${result.insertId}`));
  })
});
//Actualizar una fila
app.put('/actualizar',jsonParser,bodyParser.json(),(request:any,response:any)=>{
  let id=request.params.id;
  let usuario=request.body.usuarios;
  let clave=request.body.clave;
  let texto=request.body.texto;

  connection.query("UPDATE formularios set usuario=? where id=? ",[usuario,id], function(error:any, result:any, fields:any){
    response.send(JSON.stringify(`formulario creado ${result.update}`));
  })
})

app.delete('/eliminarUsuario',bodyParser.json(), (req:any,res:any)=> {
  console.log("xdddd");
  //console.log(req);
  let correo = "asdasd"; 
  console.log("xdddd")
  connection.query("DELETE FROM `usuarios` WHERE correo=?",correo,(req1:any,res1:any)=>{
      res.status(200).send("Usuario Eliminado");
  });
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.post('/LoginU', bodyParser.json(), function(request:any, response:any) {
	let correo = request.body.correo;
	let clave = request.body.clave;
	if (correo && clave) {
		connection.query('SELECT * FROM usuarios WHERE correo = ?', correo, async function(error:any, results:any, fields:any) {
      let claveencrip: any = results[0].clave
      let check = await comparar(clave, claveencrip)
      if(check == true){
        if (error) throw error;
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = correo;
          response.send(JSON.stringify(results));
        } 
      }	else {
        response.send(JSON.stringify(`Usuario y/o Contraseña Incorrecta`));
      }	 
			response.end();
		});
	} else {
		response.send(JSON.stringify(`Por favor ingresa Usuario y Contraseña!`));
		response.end();
	}
});

app.listen(configuracion, () => {
  console.log(`Example app listening on port ${configuracion}`)
})