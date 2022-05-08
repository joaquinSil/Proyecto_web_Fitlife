
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let listaVideosNutricion = Array();
    listaVideosNutricion = [
        {
            "nombre": "Dieta Keto",
            "link": "https://www.youtube.com/embed/UfyESkhHDmQ",
            "ranking": 0,
            "id": 1,
        },
        {
            "nombre": "Dieta mediterránea",
            "link": "https://www.youtube.com/embed/7kGXGPBD-pM",
            "ranking": 0,
            "id": 2,
        },
        {
            "nombre": "Ayuno Intermitente",
            "link": "https://www.youtube.com/embed/-ExoPSIybqE",
            "ranking": 0,
            "id": 3,
        },
        {
            "nombre": "Dieta Vegetariana",
            "link": "https://drive.google.com/file/d/1rJqEeIQ_jSYZSSwmOvkpKjy3sGDyouc-/preview",
            "ranking": 0,
            "id": 4,
        }
    ];
    function ListarVideos() {
        let i;
        let listaDeVideos = document.getElementById("todas las dietas");
        let li = document.createElement("li");
        for (i = 0; i < listaVideosNutricion.length; i++) {
            let li = document.createElement("li");
            listaDeVideos.appendChild(li).innerHTML = `<iframe width="320" height="240" src =" ${listaVideosNutricion[i].link}">`;
        }
    }
    window.addEventListener("load", ListarVideos);

