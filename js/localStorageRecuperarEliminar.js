//RemoveItem- Eliminar datos especificos

// localStorage.removeItem('clave');
// sessionStorage.removeItem('clave');

// // Clear - Para eliminar todos los daatos 

// localStorage.clear();
// sessionStorage.clear(); 


let nombre = "Raul"; 
let edad = 40; 
localStorage.setItem("nombreDeLaPersona", nombre); 
localStorage.setItem("edadDeLaPersona",edad); 

let nombreRecuperado = localStorage.getItem("nombreDeLaPersona");
console.log(nombreRecuperado); 

let recuperarEdad = parseInt(localStorage.getItem("edadDeLaPersona")); 
console.log(recuperarEdad); 