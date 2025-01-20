// const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function(numero) {
//     console.log(numero);
// });

//Uso del índie en la iteración
const frutas = ['Manzana', 'Banana', 'Cereza'];

frutas.forEach(function(fruta, indice) {
    console.log(`Índice ${indice}: ${fruta}`);
});

//Modificación de elementos en un array (aunque no es el uso principal de forEach):
const numeros = [1, 2, 3, 4];
const duplicados = [];

numeros.forEach(function(numero) {
    duplicados.push(numero * 2);
});

console.log(duplicados); // [2, 4, 6, 8]

//EJEMPLO PRACTICO 
const cursos = [
    {
        nombre: "JavaScript", 
        duracion: 8, 
        precio:15000,
    },
    {
        nombre: "React", 
        duracion: 7, 
        precio:16500,
    },
    {
        nombre: "Angular", 
        duracion: 9, 
        precio:17200,
    },
    {
        nombre: "Vue", 
        duracion: 6, 
        precio:16000, 
    },
    {
        nombre: "Svuelte", 
        duracion: 6, 
        precio:1400, 
    }
]

const resultado = cursos.find(curso => curso.nombre === "Vue")

console.log(resultado)

const resultado2 = cursos.find(cursos => cursos.precio >17000); 

const noExiste = cursos.find(curso => cursos.nombre === "Python")

console.log(noExiste)

const todoAngular = cursos.filter(cursos => cursos.nombre === "Angular")
console.log(todosAngular )