//Sintaxis 
let elemento = document.getElementById('id-del-elemento');

// HTML de referencia
<div id="app">
  <p id="parrafo1">Hola Mundo</p>
</div>

// JavaScript
let div = document.getElementById("app");
//let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML); // Muestra el contenido HTML dentro del div
console.log(parrafo.innerHTML); // Muestra "Hola Mundo"


//Sintaxis 

// JavaScript
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML); // Muestra "AR"
console.log(paises[1].innerHTML); // Muestra "CL"
console.log(paises[2].innerHTML); // Muestra "UY"

// getElementsByTagName()---------------------
//let elementos = document.getElementsByTagName('nombre-de-etiqueta');

// JavaScript
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML); // Muestra "CONTENEDOR 2"
console.log(contenedores[1].innerHTML); // Muestra "CONTENEDOR 3"

//Acceso Moderno al DOM

//Sintaxis 
//let elemento = document.querySelector('selector-css');
let encabezado = document.querySelector('h1');
let parrafo = document.querySelector('.texto-destacado');
let elementoEnlace = document.querySelector('a[href="#seccion"]');


//querySelectorAll() -------------

let elementos = document.querySelectorAll('selector-css');

let parrafos = document.querySelectorAll('p');
let itemsMenu = document.querySelectorAll('ul.menu li');