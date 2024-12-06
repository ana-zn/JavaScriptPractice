/*



Pide al usuario que ingrese su nombre utilizando prompt, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.
Declara una variable llamada temperatura y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un if, imprime un mensaje que indique si hace frío, templado o caliente.
Pide al usuario que ingrese tres números utilizando prompt, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.

*/

//Variables y Constantes
//------------------------------------------------------------------------------------------------------------------------------
// 1. Declara una variable llamada nombre y asígnale tu nombre.
// let nombre = "Ana"; 18
// console.log (nombre); 

//------------------------------------------------------------------------------------------------------------------------------
//2.Declara una constante llamada PI y asígnale el valor de π (pi).
//Booleanos 
//------------------------------------------------------------------------------------------------------------------------------
//3.Declara una variable llamada esMayorDeEdad y asígnale true si tienes más de 18 años, o false si tienes 18 años o menos.
// let esMayordeEdad = true;
// if (esMayordeEdad == true) {
//     console.log("El usuario es mayor de edad"); 
// } else{
//     console.log("Es menor de edad")
// }

//Prompt, Alert y Console.log

//------------------------------------------------------------------------------------------------------------------------------
//4.Pide al usuario que ingrese su edad utilizando prompt y almacena el valor en una variable llamada edadUsuario.
// let edadUsuario = parseInt(prompt("Ingresa tu edad"))
// if (edadUsuario>=18){
//     alert("Eres mayor de edad");
// } else{
//     alert("Eres menor de edad")
// }

//------------------------------------------------------------------------------------------------------------------------------
//5. Muestra un mensaje de alerta que diga "¡Hola!".
//alert("¡Hola!")

//------------------------------------------------------------------------------------------------------------------------------
//6. Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".
// alert("La edad ingresada es: "+ edadUsuario); 

//Control de Flujo con if y if else

//------------------------------------------------------------------------------------------------------------------------------
//7.Utilizando un if, verifica si un número ingresado por el usuario es positivo, negativo o cero, e imprime un mensaje correspondiente.

// let a = parseInt(prompt("Ingresa un numero positivo o negativo: ")); 

// if (a > 0){
//     alert("Tu numero es positivo")
// } else if (a < 0){
//     alert("Tu numero negativo")
// }else  if (a === 0){
//     alert("El numero ingresado es 0")
// } else {
//     alert("El dato ingresado es incorrecto")
// }

//------------------------------------------------------------------------------------------------------------------------------
//8.Utilizando un if else, verifica si un número ingresado por el usuario es par o impar, e imprime un mensaje correspondiente.

// let b = parseInt(prompt("Ingresa un numero para comprobar si es par o impar"))

// if (b % 2 ===0 ){
//     alert("Tu número es par")
// } else if (b % 2 === 1){
//     alert ("Tu número es impar")
// } else{
//     alert ("El dato ingresado no es un numero"); 
// }

//------------------------------------------------------------------------------------------------------------------------------
//9.Utilizando un if else, verifica si un número ingresado por el usuario es mayor que 100, menor que 100 o igual a 100, e imprime un mensaje correspondiente

// let d = parseInt(prompt("Ingresa un numero para determinar si es mayor o menor a 100: "))

// if (d>100){
//     alert(`El número ${d} mayor a 100`) 
// } else if (d<100){
//     alert(`El número ${d} es menor a 100`)
// } else if (d === 100){
//     alert(`El número ingresado es 100`)
// } else{
//     alert('El dato ingresado NO es correcto')
// }

//------------------------------------------------------------------------------------------------------------------------------

//Operadores Lógicos

//------------------------------------------------------------------------------------------------------------------------------
//10. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
// let f = parseInt(prompt("Ingrese un número: "))

// if(f % 2 === 0 && f % 3 === 0){
//     alert(`El número ${f} es divisible por 2 y 3`)
// } else{
//     alert(`El número ${f} NO es divisible por 2 y 3`)
// }


//------------------------------------------------------------------------------------------------------------------------------
//11. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.

// if(f >= 0  && f <=100){
//     alert(`El número ${f} es mayor a 0 y menor a 100`)
// } else{
//     alert(`El número ${f} es mayor 100`)
// }

//------------------------------------------------------------------------------------------------------------------------------
//12. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.

// let g = parseInt(prompt("Ingrese un número para determinar si es mayor a 10 o menor a -10"))
// if( g>= 10  || f <= -10){
//     alert(`El número ${f} es mayor a 10 y menor a -10`)
// } else{
//     alert(`El número ${f} es mayor 100`)
// }

//------------------------------------------------------------------------------------------------------------------------------
// Ejercicios Adicionales
// 13. Pide al usuario que ingrese un número utilizando prompt, luego verifica si es un número primo e imprime un mensaje correspondiente.

// let h = parseInt(prompt("Ingrese un número: "))

// if (h)

//14. Crea una variable llamada hora y asígnale un valor numérico que represente una hora del día. Luego, utilizando un if else, imprime un mensaje que indique si es mañana, tarde o noche.

// let hora = parseInt(prompt("Ingrese una hora (0 a 24)"))

// if(hora>= 7 && hora<=12){
//     alert(`Las ${hora}, nos encontramos en la mañana`)
// } else if (hora>= 12 && hora<=20){
//     alert(`Las ${hora}, nos encontramos en la tarde`)
// } else if (hora>= 21 && hora<= 6){
//     alert(`Las ${hora}, nos encontramos en la tarde`)
// } else {
//     alert(`El dato ingresado es INCORRECTO`)
// }  ESTA MAL HECHOO 


//----------------------------------------------------------------------------------------------------- (CORRECTO)
//Pide al usuario que ingrese dos números utilizando prompt, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.

// let numA = parseInt(prompt("Ingrese un primer número: ")); 
// let numB = parseInt(prompt("Ingrese un segundo número: ")); 

// if (numA%numB===0){
//     alert(`El número ${numA} es divisible con el numero ${numB}`)
// } else{
//     alert(`El número ${numA} NO es divisible con el numero ${numB}`)
// }


//----------------------------------------------------------------------------------------------------- (CORRECTO)
// Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.

// let nameUser = "Elizabeth"; 
// if (nameUser = nameUser.length>6){
//     console.log("El nombre de usuario tiene mas de 6 caracteres"); 
// } else{
//     console.log("El nombre de usuario tiene menos de 6 caracteres")
// }

//----------------------------------------------------------------------------------------------------- (CORRECTO)
// Utilizando un if else, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.

let anios = parseInt(prompt("Ingrese un año para determinar si es bisiesto: "))
if ((anios%4===0 && anios % 100 !==0) || (anios % 400 === 0)){
    alert(`El año ingresado ${anios} es Bisiesto`)
} else{
    alert(`El año ingresado ${anios} NO es Bisiesto`)
}

//Pide al usuario que ingrese su nombre utilizando prompt, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.

let nombre = prompt("Ingrese un nombre: "); 
if (nombre.length(1) === "A"){
    alert(`La primer letra del nombre ${nombre} es mayuscula`)
} else {
    alert(`La primer letra del nombre ${nombre} es minuscula`)
}