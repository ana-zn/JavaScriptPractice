/*Ejercicios Básicos de JavaScript
 */
// Variables y Constantes--------------------------------------------------------------------
// Declara una variable llamada nombre y asígnale tu nombre.
//Declara una constante llamada PI y asígnale el valor de π (pi).
// let nombre = "Ana"; 
// console.log(nombre); 

// const pi = 3.14; 
// console.log(pi); 

//Booleanos-----------------------------------------------------------------------------------
//Declara una variable llamada esMayorDeEdad y asígnale true si tienes más de 18 años, o false si tienes 18 años o menos.

// let esMayorDeEdad  = 18; 
// let edad = parseInt(prompt("Ingresa tu edad: "))
// if(edad>=esMayorDeEdad){
//     alert("Eres mayor de edad")
// } else{
//     alert("NO eres mayor de edad ")
// }

//Prompt, Alert y Console.log--------------------------------------------------------------
// 1. Pide al usuario que ingrese su edad utilizando prompt y almacena el valor en una variable llamada edadUsuario.
// let edadUsuario = parseInt(prompt("Ingresa tu edad: ")); 

// Muestra un mensaje de alerta que diga "¡Hola!".
// alert("¡Hola!"); 
// Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".
// console.log(`La edad del usuario es ${edadUsuario}`); 
// Control de Flujo con if y if else
// Utilizando un if, verifica si un número ingresado por el usuario es positivo, negativo o cero, e imprime un mensaje correspondiente.
// let num2 = parseInt(prompt("Ingrese un numero para determinar si es positivo o negativo"))
// if(num2>=0){
//     alert(`El número ingresado ${num2} es positivo`)
// } else{
//     aler(`El número ingresado ${num2} es negativo`)
// }
// Utilizando un if else, verifica si un número ingresado por el usuario es par o impar, e imprime un mensaje correspondiente.

// let num = parseInt(prompt("Ingrese un numero")); 
// if (num%2==0) {
//     alert(`El numero ${num} es positivo`)
// } else if (num%2==1){
//     alert(`El numero ${num} es negativo`)
// } else if (num==0){
//     alert("El numero ingresado es igual a 0 ")
// } else{
//     alert(`El dato ingresado, NO es correcto
//     }`) 
// }
// Utilizando un if else, verifica si un número ingresado por el usuario es mayor que 100, menor que 100 o igual a 100, e imprime un mensaje correspondiente.

// let numA = parseInt(prompt("Ingrese un numero para determinar si el numero es mayor o menor a 100")); 
// if(numA>100){
//     alert(`El número ingresado ${numA}, es mayor a 100`)
// } else if (numA<100){
//     alert(`El número ingresado ${numA}, es menor a 100`)
// } else if (numA===100){
//     alert(`El número ingresado ${numA}, es igual a 100`)
// } else {
//     alert(`El dato ingresado ${numA}, no es correcto` )
// }

// Operadores Lógicos---------------------------------------------------------------------------

//1.Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
// let numB = 6
// if(numB%2===0 && numB%3===0){
//     console.log(`El número ${numB} es tanto divisible por 2 como por 3`)
// } else{
//     console.log(`El número ${numB} NO es divisible por 2 como por 3`)
// }

//2.Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
// let numC = parseInt(prompt("Ingresa un número: "))
// if (numC>=0 || numC<=100){
//     alert(`El número ${numC} es mayor que 0 y menor a 100`)
// } else if (numC>100){
//     alert(`El número ${numC} es mayor a 100`)
// } else{
//     alert(`El número ${numC} es negativo y menor a `)
// }

//3. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.
let numD = parent(prompt("Ingresa un número, para determinar si es +10 o -10: "))
if(numD>=10){
    alert(`El número ${numD}, es mayor a 10`)
} if (numD<=-10){
    alert(`El número ${numD}, es menor a -10`)
}
 
//Ejercicios Adicionales -------------------------------------------------------------------------------
//1.Pide al usuario que ingrese un número utilizando prompt, luego verifica si es un número primo e imprime un mensaje correspondiente.
let numE = (parseInt(prompt("Ingresa un numero: ")))

//2.Crea una variable llamada hora y asígnale un valor numérico que represente una hora del día. Luego, utilizando un if else, imprime un mensaje que indique si es mañana, tarde o noche.


//3.Pide al usuario que ingrese dos números utilizando prompt, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.
//4.Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.
//5.Utilizando un if else, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.
//6.Pide al usuario que ingrese su nombre utilizando prompt, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.
//7. Declara una variable llamada temperatura y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un if, imprime un mensaje que indique si hace frío, templado o caliente.
//8.Pide al usuario que ingrese tres números utilizando prompt, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.