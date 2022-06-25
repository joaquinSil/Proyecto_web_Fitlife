var express = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var cors = require('cors');
var Client = require('pg');
var Client = require('pg');
var app = express()
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port: 3306,
  database : 'formulario'
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
app.get('/formulario',bodyParser.json(), (request:any, response:any) => {
  connection.query("SELECT * from formularios", function(error:any, results:any, fields:any){
    response.send(results);
  })
})
//Obtener los datos de una fila segun el id
app.get('/formulario/:id',bodyParser.json(), (request:any, response:any) => {
  let id=request.params.id;
  connection.query("select * from formularios where id=?", id, function(error:any, result:any, fields:any){
    response.send(JSON.stringify(result));
  })
})
//Crear una fila
app.post('/crearFormulario',bodyParser.json(),(request:any,response:any)=>{

  let usuario=request.body.usuario;
  let clave=request.body.clave;
  let texto=request.body.texto;

  connection.query("insert into formularios (usuario,clave,texto) values(?,?,?)", [usuario,clave,texto], function(error:any, result:any, fields:any){
    response.send(JSON.stringify(`formulario creado ${result.insertId}`));
  })
});
//Actualizar una fila
app.put('/actualizar',jsonParser,(request:any,response:any)=>{
  let id=request.params.id;
  let usuario=request.body.usuarios;
  let clave=request.body.clave;
  let texto=request.body.texto;

  connection.query("UPDATE formularios set usuario=? where id=? ",[usuario,id], function(error:any, result:any, fields:any){
    response.send(JSON.stringify(`formulario creado ${result.update}`));
  })
})

app.delete('/eliminarFormulario', (req:any,res:any)=> {
  let id = req.body.id;
  connection.query("DELETE FROM `usuarios` WHERE id=?",id,(req1:any,res1:any)=>{
      res.status(200).send("Usuario Eliminado");
  });
});

app.listen(configuracion, () => {
  console.log(`Example app listening on port ${configuracion}`)
})