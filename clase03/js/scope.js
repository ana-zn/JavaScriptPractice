
// function saludo(nombre = "invitado") {
//     console.log(`Bienvenido, ${nombre}`);
// }
// saludo();  // Muestra: Bienvenido, invitado
// saludo("Laura");  // Muestra: Bienvenido, Laura


//Variables globales y locals 


// let mensaje = 'Hola mundo'; // Variable global

// function mostrarMensaje() {
//     console.log(mensaje);  // Accede a la variable global
// }

// mostrarMensaje();  // Imprime: Hola mundo

//Scope---------------------------------------------------

let color = "rojo"; 

function cambiarColor(){
    color = "Azul";
    let local = "esto es una variable local"
    
}

cambiarColor(); 
console.log(color); 
console.logal(local); 


