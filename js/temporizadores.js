//SetTimeout

//Sintaxis basica 
setTimeout(función, tiempoEnMilisegundos);

//Ejemplo 
console.log("Inicio");
setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);


//SetInterval 

//Sintaxis Básica 
setInterval(función, intervaloEnMilisegundos);


//Ejemplo
console.log("Inicio");
setInterval(() => {
    console.log("Esto se ejecuta cada 1 segundo");
}, 1000);


//Cancelacion de temporizadores 
//ClearTimeOut 
let temporizador = setTimeout(() => {
    console.log("Esto no se verá nunca");
}, 3000);

clearTimeout(temporizador); // Cancela la ejecución del setTimeout


//Clear Interval 
let intervalo = setInterval(() => {
    console.log("Esto no se verá repetidamente");
}, 1000);

clearInterval(intervalo); // Cancela la ejecución del setInterval