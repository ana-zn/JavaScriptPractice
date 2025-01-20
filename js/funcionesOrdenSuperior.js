//Recibir funciones como parámetros

// const numeros = [1, 2, 3, 4];

// function porCadaUno(array, fn) {
//     for (let i = 0; i < array.length; i++) {
//         fn(array[i]);
//     }
// }

// porCadaUno(numeros, console.log);
// 1
// 2
// 3
// 4

//Retornar funciones
// function mayorQue(n) {
//     return function(m) {
//         return m > n;
//     }
// }

// let mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(12)); // true
// console.log(mayorQueDiez(8));  // false

//Métodos comunes que usan funciones del orden superior
// const numeros = [1, 2, 3, 4];
// const duplicados = numeros.map(function(num) {
//     return num * 2;
// });

// console.log(duplicados); // [2, 4, 6, 8]


//EJEMPLO PRACTICO 
const numeros = [1,2,3,4,5]; 
function  porCadaUno(array, fn){
    for (let i = 0; i<array.length; i++){
        fn(array[i])
    }
}

porCadaUno(numeros,console.log)

let total = 0; 
function acumular(numero){
    total  += numero
}; 

porCadaUno(numeros, acumular)
console.log("total acumulado: ", total)

const duplicado = []; 

porCadaUno(numeros, numero => {
    duplicado.push(numero*2)
})

console.log("ArrayDuplicado", duplicado); 