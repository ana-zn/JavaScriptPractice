/*Ejercicios Básicos de JavaScript
 */
//VARIABLES Y CONSTANTES --------------------------------------------------------------------
//--------------------COMPLETADO-----------------
// 1. Declara una variable llamada nombre y asígnale tu nombre.
// let nombre = "Ana"; 
// console.log(nombre); 
//--------------------COMPLETADO-----------------
//2.Declara una constante llamada PI y asígnale el valor de π (pi).
// const pi = 3.14; 
// console.log(pi); 

//Booleanos-----------------------------------------------------------------------------------
//--------------------COMPLETADO-----------------
//3. Declara una variable llamada esMayorDeEdad y asígnale true si tienes más de 18 años, o false si tienes 18 años o menos.

// let esMayorDeEdad  = 18; 
// let edad = parseInt(prompt("Ingresa tu edad: "))
// if(edad>=esMayorDeEdad){
//     alert("Eres mayor de edad")
// } else{
//     alert("NO eres mayor de edad ")
// }

//Prompt, Alert y Console.log--------------------------------------------------------------
//--------------------COMPLETADO-----------------
// 4. Pide al usuario que ingrese su edad utilizando prompt y almacena el valor en una variable llamada edadUsuario.
// let edadUsuario = parseInt(prompt("Ingresa tu edad: ")); 

//--------------------COMPLETADO-----------------
//5. Muestra un mensaje de alerta que diga "¡Hola!".
// alert("¡Hola!"); 

//--------------------COMPLETADO-----------------
//6. Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".
// console.log(`La edad del usuario es ${edadUsuario}`); 


// CONTROL DE FLUJO CON IF Y IF ELSE

//--------------------COMPLETADO-----------------
//7. Utilizando un if, verifica si un número ingresado por el usuario es positivo, negativo o cero, e imprime un mensaje correspondiente.
// let num2 = parseInt(prompt("Ingrese un numero para determinar si es positivo o negativo"))
// if(num2>=0){
//     alert(`El número ingresado ${num2} es positivo`)
// } else{
//     aler(`El número ingresado ${num2} es negativo`)
// }

//--------------------COMPLETADO-----------------
//8. Utilizando un if else, verifica si un número ingresado por el usuario es par o impar, e imprime un mensaje correspondiente.

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

//--------------------COMPLETADO-----------------
//9. Utilizando un if else, verifica si un número ingresado por el usuario es mayor que 100, menor que 100 o igual a 100, e imprime un mensaje correspondiente.

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

// OPERADORES LÓGICOS ---------------------------------------------------------------------------

//--------------------COMPLETADO-----------------
//10.Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
// let numB = 6
// if(numB%2===0 && numB%3===0){
//     console.log(`El número ${numB} es tanto divisible por 2 como por 3`)
// } else{
//     console.log(`El número ${numB} NO es divisible por 2 como por 3`)
// }

//--------------------COMPLETADO-----------------
//11. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
// let numC = parseInt(prompt("Ingresa un número: "))
// if (numC>=0 || numC<=100){
//     alert(`El número ${numC} es mayor que 0 y menor a 100`)
// } else if (numC>100){
//     alert(`El número ${numC} es mayor a 100`)
// } else{
//     alert(`El número ${numC} es negativo y menor a `)
// }

//--------------------COMPLETADO-----------------
//12. Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.
// let numD = parent(prompt("Ingresa un número, para determinar si es +10 o -10: "))
// if(numD>=10){
//     alert(`El número ${numD}, es mayor a 10`)
// } if (numD<=-10){
//     alert(`El número ${numD}, es menor a -10`)
// }
 
//EJERCICIOS ADICIONALES -------------------------------------------------------------------------------

//--------------------COMPLETADO-----------------
//13.Pide al usuario que ingrese un número utilizando prompt, luego verifica si es un número primo e imprime un mensaje correspondiente.
// let numE = (parseInt(prompt("Ingresa un numero: ")))
// function esPrimo(numero) {
//     if (numero <= 1) {
//         return false; // Los números menores o iguales a 1 no son primos
//     }
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false; // Si es divisible por algún número entre 2 y su raíz cuadrada, no es primo
//         }
//     }
//     return true; // Si no se encontró ningún divisor, es primo
// }

// // Prueba el código
// let numero = parseInt(prompt("Ingrese un número: "));
// if (esPrimo(numero)) {
//     alert(`${numero} es un número primo`);
// } else {
//     alert(`${numero} no es un número primo`);
// }


//--------------------COMPLETADO-----------------
//14.Crea una variable llamada hora y asígnale un valor numérico que represente una hora del día. Luego, utilizando un if else, imprime un mensaje que indique si es mañana, tarde o noche.
// let hora = (parseInt(prompt("Ingrese un valor del 0 al 24"))); 
// if (isNaN(hora)|| hora<0 || hora > 24) {
//     alert("Error! Ingrese un numero mayor a 0 ")
// } else if (hora>=0 && hora<=6){
//     alert (`La hora ${hora} pertenece a la madrugada`)
// } else if (hora>=7 && hora<=12){
//     alert (`La hora ${hora} pertenece a la mañana`)
// } else if (hora>=13 && hora<=20){
//     alert (`La hora ${hora} pertenece a la tarde`)
// } else{
//     alert (`La hora ${hora} pertenece a la noche`)
// }

//--------------------COMPLETADO-----------------
//15.Pide al usuario que ingrese dos números utilizando prompt, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.
// let a = parseInt(prompt("Ingrese un primer numero: "))
// let b = parseInt(prompt("Ingrese un segundo número: "))

// if (a % b===0){
//     alert (`El numero ${a} y es divisible por el numero ${b}`); 
// } else{
//     alert (`El numero ${a} y NO es divisible por el numero ${b}`); 
// }

//--------------------COMPLETADO-----------------
//16.Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.
// let nombreUsuario = prompt("Ingrese su nombre")
// let cantidadCaracteres = nombreUsuario.length; 
// if (cantidadCaracteres>=6){
//     alert (`El ${nombreUsuario} tiene mas de 6 caracterest, tiene un total de ${cantidadCaracteres} caracteres`)
// } else{
//     alert(`El ${nombreUsuario} tiene menos de 6 caracterest, tiene un total de ${cantidadCaracteres} caracteres`)
// }

//--------------------COMPLETADO-----------------
//17.Utilizando un if else, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.

// let anio = parseInt(prompt("Ingrese un año")); 

// if (isNaN(anio)){
//     alert("Ingrese un numero valido")
// } else if   (anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0)){
//     alert (`El año ingresado ${anio}, es Bisiesto`)
// } else {
//     alert (`El año ingresado ${anio}, NO es Bisiesto`)
// } 

//--------------------COMPLETADO-----------------
//18.Pide al usuario que ingrese su nombre utilizando prompt, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.

// let d = prompt("Ingresa un nombre con la letra A o a")
// let primeraLetra = d.charAt(0);

// if (primeraLetra!== "A" && primeraLetra!=="a") {
//     alert (`El nombre ingresado, ${d}, no empieza con a ni con A`)
// } else if (primeraLetra === "A") {
//     alert(`El nombre ingresado ${d}, empieza con A (Mayuscula)`)
// } else if (primeraLetra === "a") {
//     alert(`El nombre ingresado ${d}, empieza con a (Minuscula) `)
// }
// else {
//     alert(`Dato ingresado, INCORRECTO!`)
// }

//--------------------COMPLETADO-----------------
//19. Declara una variable llamada temperatura y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un if, imprime un mensaje que indique si hace frío, templado o caliente.

// temperatura = parseInt(prompt("Ingrese una temperatura: "))
// if (temperatura <= 0 && temperatura >= 18){
//     alert("Esta haciendo frio")
// } else if(temperatura <= 19 && temperatura >= 25){
//     alert("Esta templado")
// } else if(temperatura <= 26 && temperatura >= 40) {
//     alert("Esta haciendo calor ")
// } else{
//     alert("DATO INVALIDO")
// }

//--------------------COMPLETADO-----------------
//20.Pide al usuario que ingrese tres números utilizando prompt, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.
// let a = parseInt(prompt("Ingrese un primer número ")); 
// let b = parseInt(prompt("Ingrese un segundo número")); 
// let c = parseInt(prompt("Ingrese un segundo número")); 

// suma = a + b; 
// if (isNaN(a) && isNaN(b) && isNaN(c)){
//     alert("ERROR, ingrese un dato valido")
// } else if (suma === c){
//     alert(`La suma de los numeros ${a} y ${b} (${suma}) es igual al tercer número ${c}`)
// } else{
//     alert(`La suma de los numeros ${a} y ${b} (${suma}) NO es igual al tercer número ${c}`)
// }