
//CLASE EN VIVO------------------------------------


// let verdad = true; 
// console.log(typeof verdad) //la propiedad typeof te dice que tipo de dato es. 

// JAVASCRIPT CORRE DE ARRIBA HACIA ABAJO 

//Estructura de un if 

//if (condicion) { //si condicion es true , entonces se ejecuta esta!
//}
// let verdadero = false; 
// if (verdadero){
//     console.log("El valor de verdad de verdadero es " + verdadero)
// } else {
//     console.log("El valor de verdad de verdadero es " + verdadero + "Se ejecuto desde el true")
// }

// let stock  = true; 
// if (stock){
//     console.log("Usted puede comprar")
// } else{
//     console.log ("No hay mas stock")
// }


//Ejercicio 
// let edad = parseInt(prompt("Ingrese su edad: ")); 
//  const edadDeReferencia = 18; 
// if (edad >= edadDeReferencia){
//     alert("Usted puede pasar")
// } else{
//     alert("Eres menor de edad, no puede pasar")
// }

//Ejercicio 2 ---------------------------------------

// let numero = parseInt(prompt("Ingrese un número "))

// console.log(numero); 

// if (numero > 0 ){
//     alert("Usted ingreso un numero positivo"); 
// } else if (numero < 0 ){
//     alert("Usted ingreso un numero negativo"); 
// } else if  (numero === 0){
//     alert("Usted ingreso el 0")
// } else if (isNaN(numero)){
//     alert("ERROR INGRESE UN NÚMERO VALIDO")
// } else{
//     alert("ERROR, no ha ingresado Nada!"); 
// }

//Ejercicio 3 --------------------------------------

// let a = 12; 
// let b = "10"; 

// if (a == b ) {
//     console.log ("Ambos numeros son iguales")
// } else {
//     console.log ("Los numeros son distintos")
// }


// if (a === b){
//     console.log("Ambos numeros son estrictamente iguales!")
// } else {
//     console.error ("Los numeros son estrictamente distintos")
// }

//Ejercicio 4 --------------------------------------

// let c = 1; 
// let d = 10; 

// let f = parseInt(prompt("Ingrese un numero cualquiera: "))  

// //Si el numero esta entre el numero a y 

// if (f>=c && f<=d) {
//     alert(`El numero ${f} se encuentra entre el numero ${c} y ${d}`)
// } else{
//     alert (`El numero ${f} NO se encuntra entre el numero ${c} y ${d}` )
// }

// let verdadero = false; 
// if (!verdadero) {// Porque la negacion de el false es el true 
//     console.log("Verdadero es falso")
// }

//Ciclos 

//Ciclo por condicion 
//While 

// let nombreDelUsuario = prompt("Ingrese su nombre: "); 
// Necesito validar que el usuario ingrse un string 

// console.log(nombreDelUsuario); 

// while(nombreDelUsuario === ' ' || !isNaN(nombreDelUsuario)){
//     alert("Ingrese un nombre valido")
//     nombreDelUsuario = prompt("Ingrese su nombre")
// } 
// alert("Su nombre es: "+nombreDelUsuario); 


// DO While 
// let nombreUsuario; 
// let validacion; 

// do{
//     nombreUsuario = prompt("Ingrese su nombre");
//     validacion = nombreUsuario === ''||!isNaN(nombreUsuario); // es bolean
//     if(validacion)
//     alert("Ingrese un nombre valido"); 
// } while (validacion); 

// alert("Su nombre es: "+ nombreUsuario)


//Ciclo For 

// for(let i  = 0;i <5; i++){
//     console.log("Me estoy ejecutando " + (i+1) + " veces!")
// }


//Operadores Logicos----------------------------------
//Signo zodical en consola 
// let a; 
// do {
//     a = parseInt(prompt("Ingrese su mes de nacimiento (1-12: )")); 
//     if (isNaN(a) || a<1 ||a > 12){
//         alert("Por favor, ingres un número del 1 al 12: ")
//     }
// } while(isNaN(a) || a<1 ||a > 12); 



// switch (a){
//     case 1: 
//     console.log("Tu signo zodical es Capricornio o Acuario")
//     break; 

//     case 2: 
//     console.log("Tu signo zodical es Acuario o Picis")
//     break; 

//     case 3: 
//     console.log("Tu signo zodical es Piscis o Aries")
//     break; 

//     case 4: 
//     console.log("Tu signo zodical es Aries o Tauro")
//     break; 

//     case 5: 
//     console.log("Tu signo zodical es Tauro o Geminis")
//     break; 

//     case 6: 
//     console.log("Tu signo zodical es Geminis o Cáncer")
//     break; 

//     case 7: 
//     console.log("Tu signo zodical es Cancer o Leo")
//     break; 

//     case 8: 
//     console.log("Tu signo zodical es Leo o Virgo")
//     break; 

//     case 9: 
//     console.log("Tu signo zodical es Virgo o Libra")
//     break; 

//     case 10: 
//     console.log("Tu signo zodical es Libra o Escorpio")
//     break; 

//     case 11: 
//     console.log("Tu signo zodical es Escorpio o Sagitario")
//     break; 

//     case 12: 
//     console.log("Tu signo zodical es Sagitario o Capricornio")
//     break; 

//     default: 
//     console.log("Por favor, ingrese un número valido")
// }
