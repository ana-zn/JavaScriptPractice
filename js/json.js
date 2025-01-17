
// // Objeto usuario
// const usuario = {
//     id: "1234",
//     nombre: "Juan",
//     correo: "juan@example.com"
//   };
  
//   // Convertir el objeto usuario a una cadena JSON para almacenamiento
//   localStorage.setItem('usuario', JSON.stringify(usuario));
  
//   // Recuperar el objeto usuario de localStorage y convertirlo de nuevo a un objeto JavaScript
//   const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));
  
//   console.log(usuarioAlmacenado);


//EJERCICIO PRACTICO 
let usuario1 = {
    nombre: "Ruben",
    edad: 34
}
console.log(usuario1)

let usuarioJSON = JSON.stringify(usuario1); 
console.log(usuarioJSON);
localStorage.setItem('usuario', 'usuarioJSON')

let usuarioRecuperado = localStorage.getItem("usuario"); 
console.log(usuarioRecuperado)

let usuarioObjeto = JSON.parse(usuarioRecuperado); 


console.log(usuarioObjeto); 

//

// Supongamos que este es el carrito de compras del usuario
const carrito = {
    items: [
        { id: 1, producto: "Libro", cantidad: 2, precio: 15.00 },
        { id: 2, producto: "Lápiz", cantidad: 10, precio: 1.50 }
    ]
};

// Convertimos el objeto carrito en una cadena JSON y lo almacenamos
localStorage.setItem('carrito', JSON.stringify(carrito));

// Recuperamos la cadena JSON del almacenamiento y la convertimos de nuevo a un objeto JavaScript
const carritoAlmacenado = JSON.parse(localStorage.getItem('carrito'));

// Ahora podemos acceder y manipular los datos del carrito como un objeto JavaScript
console.log(`Total de productos: ${carritoAlmacenado.items.length}`);