
let calificacion = 75;

if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70) {
    console.log("Bueno");
} else {
    console.log("Necesitas estudiar más");
}

//Ejemplo 

let edad = parseInt(prompt("Ingresa tu edad: "))
if (edad>= 18 && edad<=30){
    alert("acceso")
} else{
    alert("SIN ACCESO")
}

//Ejemplo 

let temperatura = 35;
let advertencia = (temperatura < 0) || (temperatura > 32);
console.log(advertencia); // true si la temperatura es menor que 0 o mayor que 32

// Demo Operadores: 
let anios = 17; 
let dinero = false; 

if (edad>= 18|| dinero){
    console.log("Podes ingresar al bar")
} else{
    console.log("Sos menor, anda a tu casa a estudiar")
}

