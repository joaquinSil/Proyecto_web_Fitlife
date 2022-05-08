"use strict";
let nombre = "pepito";
console.log(nombre);
let formulario = document.getElementById("formulario");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let errores = '';
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    //asunto.HTMLFromElemnt(CSS("border-bottom-color","#F14B4B"));
    if (asunto.value == '') {
        errores += '<p>Escriba un asunto</p>';
        console.log(errores);
        asunto.innerHTML = `<"border-bottom-color=#F14B4B">`;
    }
    else {
        console.log(asunto.value);
        //$('#nombre').hide("border-bottom-color","#F14B4B")
        //$('#asunto').css("border-bottom-color","#999")
    }
    /* function ListarVideos(){
            let i:number;
            let listaDeVideos:any = document.getElementById("ejerciciosDestacados");
            let li:any=document.createElement("li");
            for(i=0;i<listaVideos.length;i++)
            {
                let li:any=document.createElement("li");
                listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${listaVideos[i].link}">` ;
            }
        }*/
    if (mensaje.value == '') {
        errores += '<p>Escriba un mensaje</p>';
        console.log(errores);
        //$('#mensaje').css("border-bottom-color","#F14B4B")
    }
    else {
        console.log(mensaje.value);
        //$('#nombre').hide("border-bottom-color","#F14B4B")
        //$('#mensaje').css("border-bottom-color","#999")
    }
});
/*
$(document).ready(function(){

    $('.btn').click(function(){
        var errores='';

        if($("asunto").val() == ''){
            errores += '<p>Escriba un asunto</p>';
            $('#asunto').css("border-bottom-color","#F14B4B")
        } else{
            //$('#nombre').hide("border-bottom-color","#F14B4B")
            $('#asunto').css("border-bottom-color","#999")
        }

        if($("mensaje").val() == ''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color","#F14B4B")
        } else{
            //$('#nombre').hide("border-bottom-color","#F14B4B")
            $('#mensaje').css("border-bottom-color","#999")
        }

        if(errores == '' == false){
            var mensaje='<div class="ventana"><div class="mensaje">'+errores+'<span id=btnClose>Cerrar</span></div></div>'
            $('body').append(mensaje);
        } else{
            $('#btnClose').click(function(){
                $('.ventana').remove();
            })
            $('formulario').submit(function(evento){
                evento.preventDefault();
                var asunto = $('#asunto').val();
                var mensaje = $('#mensaje').val();

                console.log(nombre+''+correo+''+asunto+''+mensaje);
                
            })
        }

        $('#btnClose').click(function(){
            $('.ventana').remove();
        })
    })

    $('.btn-imc').click(function(){
        var errores='';

        if($("peso").val() == ''){
            errores += '<p>Escriba su peso</p>';
            //$('#nombre').css("border","#F14B4B")
            $('#peso').css("border-bottom-color","#F14B4B")
        }else{
            //$('#nombre').hide("border-bottom-color","#F14B4B")
            $('#peso').css("border-bottom-color","#999")
        }

        if($("altura").val() == ''){
            errores += '<p>Ingrese su altura</p>';
            $('#altura').css("border-bottom-color","#F14B4B")
        } else{
            //$('#nombre').hide("border-bottom-color","#F14B4B")
            $('#altura').css("border-bottom-color","#999")
        }

        if(errores == '' == false){
            var mensaje='<div class="ventana"><div class="mensaje">'+errores+'<span id=btnClose>Cerrar</span></div></div>'
            $('body').append(mensaje);
        } else{
            $('#btnClose').click(function(){
                $('.ventana').remove();
            })
            $('formulario').submit(function(evento){
                evento.preventDefault();
                var peso = $('#peso').val();
                var altura = ($('#altura').val())/100;

                var imc=peso/(altura*altura);
                
                errores += '<p>Su IMC es de :'+imc+'</p>';

                if(imc<18.5){
                    errores += '<p>Usted tiene bajo peso, se le recomienda que aumente su masa</p>';
                } else{
                    if(imc<24.9){
                        errores += '<p>Usted tiene un buen peso, se le recomienda que lo mantenga</p>';
                    } else{
                        if(imc<29.9){
                            errores += '<p>Usted tiene sobre peso, se le recomienda que baje su masa</p>';
                        }
                    }
                }
                
                var mensaje='<div class="ventana"><div class="mensaje">'+errores+'<><span id=btnClose>Cerrar</span></div></div>'
                $('body').append(mensaje);
                
            })
        }

        $('#btnClose').click(function(){
            $('.ventana').remove();
        })
    })
    
})
*/
