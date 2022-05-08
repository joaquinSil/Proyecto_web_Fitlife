"use strict";
let calculadora = document.getElementById("formulario");

let alturaMt = '';
let imc = '';
let errores = '';
calculadora.addEventListener("submit", function (evento) {
    //evento.preventDefault();
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    //evento.preventDefault();

    console.log(peso);
    if ((peso) == '') {
        errores += 'Escriba su peso en Kg ';
        console.log(peso);
        //$('#mensaje').css("border-bottom-color","#F14B4B")
    }
    console.log(peso);
    console.log(altura);

    if ((altura) == '') {
        console.log(altura);
        errores += 'Escriba su altura en cm ';
        //$('#mensaje').css("border-bottom-color","#F14B4B")
    }
    console.log(altura);
    if (errores == '') {
        
        alturaMt = (altura)/100;
        imc = peso / ((alturaMt) * (alturaMt));
        errores += 'Su IMC es de :' + imc + ' ';
        if (imc < 18.5) {
            errores += 'Usted tiene bajo peso, se le recomienda que aumente su masa';
        }
        else {
            if (imc < 24.9) {
                errores += 'Usted tiene un buen peso, se le recomienda que lo mantenga';
            }
            else {                
                errores += 'Usted tiene sobre peso, se le recomienda que baje su masa corporal';
            }
        }
        alert(errores);
    }
    else {
        alert(errores);
    }
}); /*

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
})*/