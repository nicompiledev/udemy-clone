//Variables
const carrito = document.querySelector('#carrito');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];



cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        // console.log(e.target);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso

function leerDatosCurso(curso) {
    // console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    

    //Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);

    carritoHTML();

}   

//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody
function limpiarHTML() {
    contenedorCarrito.innerHTML = '';
}



// // Obtener el elemento con id "header"
// var header = document.getElementById("header");

// // Obtener el elemento con clase "row" que es hijo de "header"
// var row = header.querySelector(".row");

// // Obtener el elemento con clase "two columns" que es hijo de "row"
// var twoColumns = row.querySelector(".two.columns");

// // Obtener el primer elemento "li" que es hijo de "twoColumns"
// var li = twoColumns.querySelector("li");

// // Obtener el elemento "div" que es hijo de "li"
// var carrito = li.querySelector("div");

// // Obtener el elemento "table" que es hijo de "carrito"
// var table = carrito.querySelector("table");

// // Obtener el elemento "tbody" que es hijo de "table"
// var tbody = table.querySelector("tbody");


// // Obtener todos los elementos "div" con clase "card"
// var cards = document.querySelectorAll(".card");

// // Asignar un "event listener" para el evento "click" a cada elemento "div"
// for (var i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", function() {
//     // Obtener el elemento "h4" que está dentro de este elemento "div"
//     var h4 = this.querySelector("h4");
    
//     // Obtener el contenido del elemento "h4"
//     var contenido = h4.innerHTML;
    
//     // Mostrar el contenido en la consola
//     console.log(contenido);
//   });
// }