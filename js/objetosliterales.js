
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
};


// Array
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // Accede al primer elemento: "rojo"

// Objeto Literal
const semaforo = {
    rojo: "Detenerse",
    verde: "Avanzar",
    azul: "Cuidado"
};
console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse"

let arrayObjetos = []; 
arrayObjetos.push({
    id:1 , nombre: "producto1"
})
arrayObjetos.push({
    id:2 , nombre: "producto2"
})
arrayObjetos.push({
    id:3 , nombre: "producto3"
})

console.log(arrayObjetos); 

// fot (let objeto of arrayObjetos){
//     console.log(objeto.nombre)
// }