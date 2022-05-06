
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("xddd");
    function xd() {
        console.log("xddddd");
    }
    window.addEventListener("load", xd);
    let listaVideos = Array();
    listaVideos = [
        {
            "nombre": "Rutina de abdomen",
            "link": "https://drive.google.com/file/d/1pWN8cGyarrqfL06FXxA5i8p74_lkImll/preview",
            "ranking": 3,
        },
        {
            "nombre": "Rutina de piernas",
            "link": "https://www.youtube.com/embed/nKmH2Laeirk",
            "ranking": 3,
        },
        {
            "nombre": "Rutina de brazos",
            "link": "https://www.youtube.com/embed/HFm4mVhXCFI",
            "ranking": 3,
        }
    ];
    function ListarVideos() {
        let i;
        let listaDeVideos = document.getElementById("video");
        let li = document.createElement("li");
        for (i = 0; i < listaVideos.length; i++) {
            let li = document.createElement("li");
            listaDeVideos.appendChild(li).innerHTML = `< src =" ${listaVideos[i].link}">`;
        }
    }
    window.addEventListener("load", xd);
    window.addEventListener("load", ListarVideos);
