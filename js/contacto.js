

console.log("aocadvcjaldkjlajsclkaj")

$(document).ready(function(){

    $('.btn').click(function(){
        var errores='';

        if($("nombre").val() == ''){
            errores += '<p>Escriba un nombre</p>';
            //$('#nombre').css("border","#F14B4B")
            $('#nombre').css("border-bottom-color","#F14B4B")
        }else{
            //$('#nombre').hide("border-bottom-color","#F14B4B")
            $('#nombre').css("border-bottom-color","#999")
        }

        if($("correo").val() == ''){
            errores += '<p>Ingrese un correo</p>';
            $('#correo').css("border-bottom-color","#F14B4B")
        } else{
            //$('#nombre').hide("border-bottom-color","#F14B4B")
            $('#correo').css("border-bottom-color","#999")
        }

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
                var nombre = $('#nombre').val();
                var correo = $('#correo').val();
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