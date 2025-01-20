//Sintaxis 
// const nuevoArray = array.filter(function(elemento, indice, array) {
//     // Condición que debe cumplirse
// });
//Filtrar números pares de un array:
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(numerosPares); // [2, 4, 6]

//Filtrar objetos en un array---------------------------
// const cursos = [
//     { nombre: 'JavaScript', duracion: 8 },
//     { nombre: 'React', duracion: 6 },
//     { nombre: 'Angular', duracion: 10 }
// ];

const cursosLargos = cursos.filter(function(curso) {
    return curso.duracion > 7;
});

console.log(cursosLargos);
// [{ nombre: 'JavaScript', duracion: 8 }, { nombre: 'Angular', duracion: 10 }]

// Filtrar elementos que contienen una subcadena:--------------

const palabras = ['manzana', 'banana', 'cereza', 'damasco'];

const palabrasConA = palabras.filter(function(palabra) {
    return palabra.includes('a');
});

console.log(palabrasConA); // ['manzana', 'banana', 'cereza', 'damasco']

//Ejemplo Practico 

const cursos = [
    {
        nomre: " JavaScript ",
        precio: 15000, 
        duracion: 5 , 
    },
    {
        nomre: "React",
        precio:16000 , 
        duracion: 6, 
    },
    
    {
        nomre: " Angular",
        precio: 17200, 
        duracion: 9, 
    },
    
    {
        nomre: "Vue",
        precio:14000 , 
        duracion: 4, 
    }
    
    
]

const nombresCursos = cursos.map(curso => curso.nombre); 
console.log(nombresCursos); 


const CursoDescuento = cursos.map(curso=>{
    return {
        ...curso, 
        precio: cursos.precio*0.9
    }
})

console.log(CursoDescuento); 


const duracionHoras = cursos.map(curso => cursos.duracion*10)
console.log(duracionHoras)