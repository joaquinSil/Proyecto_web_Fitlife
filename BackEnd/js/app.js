"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');
var Client = require('pg');
var app = express();
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'xd'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
app.use(cors());
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));
const configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
//Obtener todas las filas
app.get('/Usuarios', bodyParser.json(), (request, response) => {
    connection.query("SELECT * from usuarios", function (error, results, fields) {
        response.send(results);
    });
});
//Obtener los datos de una fila segun el id
app.get('/Usuarios/:usuario', bodyParser.json(), (request, response) => {
    let usuario = request.params.usuario;
    connection.query("select * from usuarios where usuario=?", usuario, function (error, result, fields) {
        response.send(JSON.stringify(result));
    });
});
//Crear una fila
app.post('/crearUsuarios', bodyParser.json(), (request, response) => {
    let nombre = request.body.nombre;
    let correo = request.body.correo;
    let usuario = request.body.usuario;
    let clave = request.body.clave;
    connection.query("insert into usuarios (nombre,correo,usuario,clave) values(?,?,?,?)", [nombre, correo, usuario, clave], function (error, result, fields) {
        response.send(JSON.stringify(`formulario creado ${result.insertId}`));
    });
});
//Actualizar una fila
app.put('/actualizar', jsonParser, (request, response) => {
    let id = request.params.id;
    let usuario = request.body.usuarios;
    let clave = request.body.clave;
    let texto = request.body.texto;
    connection.query("UPDATE formularios set usuario=? where id=? ", [usuario, id], function (error, result, fields) {
        response.send(JSON.stringify(`formulario creado ${result.update}`));
    });
});
app.delete('/eliminarFormulario', (req, res) => {
    let id = req.body.id;
    connection.query("DELETE FROM `usuarios` WHERE id=?", id, (req1, res1) => {
        res.status(200).send("Usuario Eliminado");
    });
});
app.listen(configuracion, () => {
    console.log(`Example app listening on port ${configuracion}`);
});
