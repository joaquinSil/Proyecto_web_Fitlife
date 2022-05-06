
console.log("xddd")
let Variable = 1231;
let variable ="wenaqlo";
function xd()
{
    console.log("xddddd")
}

window.addEventListener("load" ,xd);
import {video} from './Videos';

let listaVideos = Array <video>();

listaVideos =[
    {
        "nombre":"Rutina de abdomen",
        "link":"https://drive.google.com/file/d/1pWN8cGyarrqfL06FXxA5i8p74_lkImll/preview",
        "ranking":3,
        "id":1,
    },    
    {
        "nombre":"Rutina de piernas",
        "link":"https://www.youtube.com/embed/nKmH2Laeirk",
        "ranking":3,
        "id":2,
    },   
    {
        "nombre":"Rutina de brazos",
        "link":"https://www.youtube.com/embed/HFm4mVhXCFI" ,
        "ranking":3,
        "id":3,
    }   
];
function ListarVideos(){
    let i:number;
    let listaDeVideos:any = document.getElementById("ejerciciosDestacados");
    let li:any=document.createElement("li");
    for(i=0;i<listaVideos.length;i++)
    {
        let li:any=document.createElement("li");
        listaDeVideos.appendChild(li).innerHTML=`<iframe width="320" height="240" src =" ${listaVideos[i].link}">` ;
    }
}
window.addEventListener("load" ,xd);
window.addEventListener("load" ,ListarVideos);