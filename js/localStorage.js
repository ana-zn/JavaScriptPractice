//LOCAL STORAGE 
// Guardar datos
localStorage.setItem('usuario', 'JuanPerez');
// Obtener datos
let usuario = localStorage.getItem('usuario');
console.log(usuario); // 'JuanPerez'
// Eliminar datos
localStorage.removeItem('usuario');

//Uso básico de setlem 

//Almacenar cadenas de texto 
localStorage.setItem('saludo', 'Hola, mundo!');

//Almacenar números (Aunque solo puede almacenar caenas de texto, se puede guardar numeros como texto )
localStorage.setItem('puntuacion', '10');
let puntuacion = parseInt(localStorage.getItem('puntuacion')); console.log(puntuacion); // 10 
//Almacenar datos complejos (como objetos o arrays)
let usuario1 = { nombre: 'Ana', edad: 25 }; localStorage.setItem('usuario1', JSON.stringify(usuario1));

//Para recuperarlo usar 
let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario1')); console.log(usuarioRecuperado.nombre); // Ana 
//SESION STORAGE 
// Guardar datos
sessionStorage.setItem('detalleCompra', 'Libro de JavaScript');
// Obtener datos
let detalle = sessionStorage.getItem('detalleCompra');
console.log(detalle); // 'Libro de JavaScript'
// Eliminar datos al cerrar la pestaña
sessionStorage.removeItem('detalleCompra');

