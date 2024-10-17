import {imagenCreacion, listaCreacion, parrafoCreacion, tablaCreacion} from "./funciones.js";


function insertarLista(){

    let insertar = document.getElementById('elementoInserccion');
    insertar.innerHTML = ' ';
    insertar.appendChild(listaCreacion());

}

function insertarParrafo(){
    let insertar = document.getElementById('elementoInserccion');
    insertar.innerHTML = ' ';
    insertar.appendChild(parrafoCreacion());
}

function insertarTabla(){
    let insertar = document.getElementById('elementoInserccion');
    insertar.innerHTML = ' ';
    insertar.appendChild(tablaCreacion());
}

function insertarImg(){
    let insertar = document.getElementById('elementoInserccion');
    insertar.innerHTML = ' ';
    insertar.appendChild(imagenCreacion());
}

window.listaInsertar = insertarLista;
window.parrafoInsertar = insertarParrafo;
window.tablaInsertar = insertarTabla;
window.imagenInsertar = insertarImg;