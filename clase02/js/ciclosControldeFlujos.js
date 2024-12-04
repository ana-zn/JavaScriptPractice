// Ciclo For 
// let i = 0;
// for (let i = 0; i <5; i++){
//     console.log("Número: "+ i)
// }

//Ciclo While 
// let j = 0; 
// while (j<5){
//     console.log('Número: '+j)
//     j++; 
// }

//Ciclo Do While 

// let h = 0 
// do{
//     console.log("Número: "+h)
//     h++;
// } while (h<5); 

//Actividad: Tenes que saludar en 5 veces con la frase "Hola Mundo"
//Ciclos por repeticion 

// for (let a = 0; i<5; a++){
//     console.log("Hola Mundo")
// }

//Ciclos condicionales 
// const password = "1234";

// let passwordIngresado = prompt("Ingrese su contraseña"); 
// while(passwordIngresado != password){
//    passwordIngresado = prompt("Ingrese su contraseña: "); 
// }
// alert("Constraseña Correcta"); 


//Control de Ciclos 

//break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del ciclo cuando i es igual a 5
    }
    console.log(i); // Imprime los números de 0 a 4
}

//continue

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Omite los números pares
    }
    console.log(i); // Imprime los números impares entre 0 y 9
}

//Validacion de usuarios 
const usuario = [
    {nombre: "Ana", edad: 20, aceptoTerminos:false},
    {nombre: "Luis", edad: 17,aceptoTerminos:true},
    {nombre: "Carlos", edad:18,aceptoTerminos:true},
    {nombre: "Maria", edad:15,aceptoTerminos:true},
]

for (let i  = 0; i <usuario.length;  i++){
    if(usuario[i].edad >= 18 && usuario[i].aceptoTerminos){
        console.log(usuario[i].nombre); 
    }
}
