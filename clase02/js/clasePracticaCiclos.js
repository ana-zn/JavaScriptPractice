//Find the Bug 
//Actividad 1 (Observa el siguiente código y resuelve las preguntas) 
//--------------------COMPLETADO-----------------
// let cantidad = prompt('Ingrese la cantidad de repeticiones'); 
// let texto = prompt('Ingrese el texto a repetir'); 
// for (let index = 0; index < cantidad; index++) { 
//     console.log(texto); 
// }


//Actividad 2 (Observa el siguiente código y resuelve las preguntas) 
//¿Qué tiene que hacer este código? ¿Por qué no cumple con su función? ¿Qué propuesta podrías hacer para que tenga sentido su uso?
//--------------------COMPLETADO-----------------

// let lados = prompt('Ingrese la cantidad de lados: '); 
// if (isNaN(lados) || lados <=0) {
//     alert("Por favor ingrese un número válido mayor a 0")
// } else {
//     lados= parseInt(lados); 
//     for (let index = 1; index <= lados; index++){
//         alert("lado" + index)
//     }
// }


//Actividad 3------------------------------------
//Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.
//--------------------COMPLETADO-----------------
// let a = parseInt(prompt("Ingrese un número"))
// if (isNaN(a)){
//     alert("Incorrecto, ingrese un número valido")
// } else if (a%2===0){
//     alert(`El número ${a} es par`)
// } else{
//     alert (`El número ${a} es impar`)
// }

//Actividad 4 
//Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".
//--------------------COMPLETADO-----------------
// let b;  
// let countPares = 0; 
// let countImpares = 0; 
// while (b!=="salir") {
//     b = prompt("Ingrese un número o escribe 'Salir' para terminar: ")
//     if (b==="Salir"){
//         break
//     }

//     const numero = parseInt(b, 10);

//     if(!isNaN(numero)) {
//         if (numero %2 === 0){
//             countPares++; 
//         } else{
//             countImpares++
//         }
//     }
//     else{
//         alert("Por favor, ingrese un número válido.")
//     }
// }

// alert(`Cantidad de números pares: ${countPares}`);
// alert(`Cantidad de números impares: ${countImpares}`);





