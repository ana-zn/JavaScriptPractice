
function mostrarMensaje() {
    console.log("¡Hola, mundo!");
}


mostrarMensaje(); // Muestra: ¡Hola, mundo!


function mostrarUsuario(nombre) {
    console.log("Usuario: " + nombre);
}


function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // Muestra: 8

let resultado2 = sumar(2, 2); 
console.log(resultado2)


function calcularDistancia(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

let distancia = calcularDistancia(0, 0, 10, 10);
console.log(distancia); // Muestra la distancia entre los puntos

//Ejemplo de funciones basica 
// function saludar (){
    //Cuerpo de la función. 

//     console.log("Hola desde mi función"); 
// }
//Invocar 
// saludar(); 


// Parématros y Argumentos---------------------------------

// function sumar(a, b) {
//     return a + b;
// }

//Llamada a la funcion con argumentos 
// let resultadoA = sumar(5, 3);
// console.log(resultadoA);  // Muestra: 8


//Funcion con multiples parametro 

function introducir(nombre, edad) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}
introducir("Ana", 25);
introducir("Sofia", 12); 

//Uso avanzado: Parámetro Predeterminados 

function saludo(nombre = "invitado") {
    console.log(`Bienvenido, ${nombre}`);
}
saludo();  // Muestra: Bienvenido, invitado
saludo("Laura");  // Muestra: Bienvenido, Laura


//Parametros----------------------------------------------
function saludar(nombre, edad){
    console.log("Hola" + nombre); 
    console.log("Tu edad es " + edad)
}
saludar("samuel", 37); 
