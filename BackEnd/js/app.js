"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mysql = require('mysql');
const { encriptar, comparar } = require('../js/encript.js');
var path = require('path');
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
app.get('/getUsuarios', bodyParser.json(), (request, response) => {
    let clave = request.body.clave;
    console.log(clave);
    connection.query("SELECT * from usuarios", function (error, results, fields) {
        response.send(results);
    });
});
app.get('/getFormularios', bodyParser.json(), (request, response) => {
    console.log("xdd");
    connection.query("SELECT * from contacto", function (error, results, fields) {
        response.send(results);
    });
});
//Obtener los datos de una fila segun el id
app.get('/getUsuario', bodyParser.json(), (request, response) => {
    //console.log("correo");
    let correo = request.body.correo;
    console.log(correo);
    connection.query("select * from usuarios where correo=?", correo, function (error, result, fields) {
        response.send(JSON.stringify(result));
    });
});
//Crear una fila
app.post('/crearUsuarios', bodyParser.json(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    let nombre = request.body.nombre;
    let correo = request.body.correo;
    let usuario = request.body.usuario;
    let clave = request.body.clave;
    let hash = yield encriptar(clave);
    connection.query("insert into usuarios (nombre,correo,usuario,clave) values(?,?,?,?)", [nombre, correo, usuario, hash], function (error, result, fields) {
        if (error) {
            response.send(JSON.stringify(`F`));
        }
        else {
            response.status(200).send(result);
        }
    });
}));
app.post('/crearFormulario', bodyParser.json(), (request, response) => {
    console.log("xddddd");
    let nombre = request.body.nombre;
    let correo = request.body.correo;
    let asunto = request.body.asunto;
    let mensaje = request.body.mensaje;
    console.log(nombre, correo, asunto, mensaje);
    connection.query("insert into contacto (nombre,correo,asunto,mensaje) values(?,?,?,?)", [nombre, correo, asunto, mensaje], function (error, result, fields) {
        response.send(JSON.stringify(`formulario creado ${result.insertId}`));
    });
});
//Actualizar una fila
app.put('/cambiarClave', bodyParser.json(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    let correo = request.body.correo;
    let claveActualIngresada = request.body.claveActualIngresada;
    let claveIngresada = request.body.claveIngresada;
    let claveEncriptada = request.body.claveEncriptada;
    let hash = yield encriptar(claveIngresada);
    console.log(correo);
    console.log(claveActualIngresada);
    console.log(claveIngresada);
    console.log(claveEncriptada);
    console.log(hash);
    connection.query("UPDATE `usuarios` SET clave=? WHERE correo=?", [hash, correo], (req1, res1) => {
        response.status(200).send("Usuario Actualizado");
    });
}));
app.post('/verificarClave', bodyParser.json(), (request, response) => {
    let correo = request.body.correo;
    let clave = request.body.clave;
    console.log(clave + correo);
    connection.query('SELECT * FROM usuarios WHERE correo = ?', correo, function (error, results, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(results[0]);
            let claveencrip = results[0].clave;
            let check = yield comparar(clave, claveencrip);
            if (check == true) {
                if (error)
                    throw error;
                if (results.length > 0) {
                    response.send(JSON.stringify(results));
                }
            }
            else {
                response.send(JSON.stringify(`Usuario y/o Contraseña Incorrecta`));
            }
            response.end();
        });
    });
});
app.delete('/borrarUsuario/:correo', bodyParser.json(), (request, response) => {
    let correo = request.params.correo;
    console.log(correo);
    connection.query("DELETE FROM `usuarios` WHERE correo=?", correo, (req1, res1) => {
        response.send(JSON.stringify(`Usuario y/o Contraseña Incorrecta`));
    });
});
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.post('/LoginU', bodyParser.json(), function (request, response) {
    let correo = request.body.correo;
    let clave = request.body.clave;
    if (correo && clave) {
        connection.query('SELECT * FROM usuarios WHERE correo = ?', correo, function (error, results, fields) {
            return __awaiter(this, void 0, void 0, function* () {
                if (results[0] != undefined) {
                    console.log(results[0]);
                    let claveencrip = results[0].clave;
                    console.log(clave);
                    let check = yield comparar(clave, claveencrip);
                    console.log(check);
                    if (check == true) {
                        if (error)
                            throw error;
                        if (results.length > 0) {
                            request.session.loggedin = true;
                            request.session.username = correo;
                            response.send(JSON.stringify(results));
                        }
                    }
                    else {
                        response.send(JSON.stringify(`F`));
                    }
                }
                else {
                    response.send(JSON.stringify(`F`));
                }
                response.end();
            });
        });
    }
    else {
        response.send(JSON.stringify(`F`));
        response.end();
    }
});
app.listen(configuracion, () => {
    console.log(`Example app listening on port ${configuracion}`);
});
