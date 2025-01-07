let nombre = "Raul"; 
let edad = 40; 
localStorage.setItem("nombreDeLaPersona", nombre); 
localStorage.setItem("edadDeLaPersona",edad); 

let nombreRecuperado = localStorage.getItem("nombreDeLaPersona");
console.log(nombreRecuperado); 

let recuperarEdad = parseInt(localStorage.getItem("edadDeLaPersona")); 
console.log(recuperarEdad); 