//Modificacion de Nodos 
// Métodos de manipulación del DOM

// // Modificar contenido HTML interno
// let contenedor = document.getElementById('contenedor');
// contenedor.innerHTML = '<h1>Nuevo título</h1><p>Nuevo párrafo</p>';

// // Modificar texto dentro de un nodo
// let titulo = document.getElementById('titulo');
// titulo.innerText = 'Texto actualizado';

// // Modificar o establecer un atributo
// let enlace = document.querySelector('a');
// enlace.setAttribute('href', 'https://www.example.com');

// // Crear y añadir nodos
// let nuevoDiv = document.createElement('div');
// nuevoDiv.innerHTML = 'Este es un nuevo div';
// document.body.appendChild(nuevoDiv);

// let lista = document.getElementById('lista');
// let nuevoItem = document.createElement('li');
// nuevoItem.textContent = 'Nuevo ítem';
// lista.appendChild(nuevoItem);

// // Insertar un nodo antes de otro
// let primerItem = lista.firstChild;
// lista.insertBefore(nuevoItem, primerItem);

// // Eliminar nodos
// let itemAEliminar = document.getElementById('item');
// lista.removeChild(itemAEliminar);

// let elemento = document.getElementById('elemento');
// elemento.remove();


//Ejemplo practico 

let contenido = document.getElementById('contenido')
contenido.innerHTML=`
    <h1>Bienvenidos a JavaScript</h1>
    <p>Esto es un parrafo creado desde JavaScript</p>
`

let titulo = document.querySelector('h1'); 
titulo.innerText =`Bienvenidos a mi nuevo titulo`; 

titulo.className = `nuevo-clase`; 