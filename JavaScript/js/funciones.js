export function listaCreacion(){

    let ul = document.createElement('ul');

    const arrayLista = ['teclado', 'raton', 'casco', 'monitor'];

    arrayLista.forEach(element => {
        
    let li = document.createElement('li');
    li.innerHTML = element;
    ul.appendChild(li);
    });

    return ul;

}

export function parrafoCreacion(){

    let p = document.createElement('p');
    p.textContent = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";

    return p;
}

export function tablaCreacion(){

    const tablaElementos = [
       
        {nombre: 'carlos', apellidos: 'haro', edad: '9'},
        {nombre: 'guillermo', apellidos: 'ponce', edad: '10'},
        {nombre: 'ruben', apellidos: 'veneno', edad: '9'}
    ];

    let tabla = document.createElement('tabla');

    

    let tr = document.createElement('tr');

    tr.innerHTML = "<tr><td>nombre</td></tr><tr><td>apellidos</td></tr><tr><td>edad</td></tr>";
    tabla.appendChild(tr);

    tablaElementos.forEach(element => {
        
        let trw = document.createElement('tr');
        trw.innerHTML = `<th><td>${element.nombre}</td></th><th><td>${element.apellidos}</td></th><th><td>${element.edad}</td></th>`;
        tabla.appendChild(trw);
    });


    return tabla;
}


export function imagenCreacion(){

    let img = document.createElement('img');
    img.src = "./imagenes/b4dzp9oh.bmp";
    img.alt = "Imagen del gran Hitler";
    return img;

}