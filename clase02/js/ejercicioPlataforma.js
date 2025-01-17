/*

Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces

 */

//1. Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
// let num = parseInt(prompt("Ingrese un número: "))
// let incremento = parseInt(prompt("¿Cuánto quieres sumarle a cada repetición?"))
// for (let i = 1; i <= 5; i++) {
//     num += incremento; 
//     console.log(num); 
// }

//2.Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
let texto = prompt("Ingrese un texto (Escribe 'ESC' para salir: )")
let resultado=""; 

while(texto !== "ESC"){
    resultado += texto + " "; 
    alert(`Resultado actual: ${resultado}`); 
    console.log(`Resultado actual: ${resultado}`); 
    texto = prompt ("Ingrese otro texto (Escribe 'ESC' para salir: )")
}
console.log("Programa Finalizado.")



// 3.Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces
// let b = parseInt(prompt("Ingrese la cantidad de veces: "))
// for (let i = 1; i<=b; i++){
//     console.log(`Repetición ${i}: Hola Mundo`);
// }