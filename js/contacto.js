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
            var mensaje='<div class="ventanaError"><div class="mensajeError">'+errores+'<span id=btnClose>Cerrar</span></div></div>'
            $('body').append(mensaje);
        } else{
            $('#btnClose').click(function(){
                $('.ventanaError').remove();
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
            $('.ventanaError').remove();
        })
    })
    
})