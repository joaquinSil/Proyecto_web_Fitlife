    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("xddd");
    let Variable = 1231;
    let variable = "wenaqlo";
    function xd() {
        console.log("xddddd");
    }
    window.addEventListener("load", xd);
    let listaVideosDestacados = Array();
    let listaVideos = Array();
    listaVideosDestacados = [
        {
            "nombre": "Rutina de abdomen",
            "link": "https://drive.google.com/file/d/1pWN8cGyarrqfL06FXxA5i8p74_lkImll/preview",
            "ranking": 3,
            "id": 1,
        },
        {
            "nombre": "Rutina de piernas",
            "link": "https://www.youtube.com/embed/nKmH2Laeirk",
            "ranking": 3,
            "id": 2,
        },
        {
            "nombre": "Rutina de brazos",
            "link": "https://www.youtube.com/embed/HFm4mVhXCFI",
            "ranking": 3,
            "id": 3,
        }
    ];
    listaVideos = [
        {
            "nombre": "Rutina de abdomen",
            "link": "https://drive.google.com/file/d/1pWN8cGyarrqfL06FXxA5i8p74_lkImll/preview",
            "ranking": 3,
            "id": 1,
        },
        {
            "nombre": "Rutina de piernas",
            "link": "https://www.youtube.com/embed/nKmH2Laeirk",
            "ranking": 3,
            "id": 2,
        },
        {
            "nombre": "Rutina de brazos",
            "link": "https://www.youtube.com/embed/HFm4mVhXCFI",
            "ranking": 3,
            "id": 3,
        },
        {
            "nombre": "Rutina HITT 10 min",
            "link": "https://www.youtube.com/embed/3A_27w5CR6A",
            "ranking": 3,
            "id": 4,
        },
        {
            "nombre": "Rutina HITT 20 min",
            "link": "https://drive.google.com/file/d/1VzQ432GzFU1xBIeqpqEEoo-i1MeGUl0a/preview",
            "ranking": 3,
            "id": 5,
        },
        {
            "nombre": "Rutina HITT 30 min",
            "link": "https://drive.google.com/file/d/12zal_N-672gMhi4sjjSP2x_d2Vy-KFqm/preview",
            "ranking": 3,
            "id": 6,
        }
    ];
    function ListarVideosDestacados() {
        let i;
        let listaDeVideos = document.getElementById("ejerciciosDestacados");
        let li = document.createElement("li");
        for (i = 0; i < listaVideosDestacados.length; i++) {
            let li = document.createElement("li");
            listaDeVideos.appendChild(li).innerHTML = `<iframe width="320" height="240" src =" ${listaVideosDestacados[i].link}">`;
        }
    }
    function ListarVideos() {
        let i;
        let listaDeVideos = document.getElementById("Todas las rutinas");
        let li = document.createElement("li");
        for (i = 0; i < listaVideos.length; i++) {
            let li = document.createElement("li");
            listaDeVideos.appendChild(li).innerHTML = `<iframe width="320" height="240" src =" ${listaVideos[i].link}">`;
        }
    }
    window.addEventListener("load", xd);
    window.addEventListener("load", ListarVideosDestacados);
    window.addEventListener("load", ListarVideos);
