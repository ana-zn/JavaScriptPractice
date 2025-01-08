// myArray = 4; 
// console.log(myArray); 

// myArray.push(4); 
// console.log(m


// const myArray = [1, 2, 3, 5, -10, 9, 0, 9, -10, 100, 80, 0]; 

// console.log(myArray); 
// myArray.forEach(num) => {
//     console.log(num); 
// }

// const stringArray = ["Hola", "Mundo", "Coder"]; 
// const inventario = {}; 
// stringArray.forEach((palabra, indice) =>{
//     inventario[indice] = palabra; 
// })

// console.log(inventario); 

//filter
const cursos = [
    {nombre: "JavaScript", precio:190000},
    {nombre: "React", precio:170000}, 
    {nombre: "Angular", precio:175000}, 
    {nombre: "SQL", precio:120000}, 
    {nombre: "Backend", precio:120000}, 
]

console.log(cursos);  
const cursosEconomicos = cursos.filter((curso) => curso.precio<17.500); 
const CursosCaros =  cursos.filter((curso) => curso.precio >= 17500);   
console.log(cursosEconomicos); 
console.log(cursosCaros); 

const myArray = [1, 2, 3, 5, -10, 9, 0, 9, -10, 100, 80, 0]; 

const myArrayFiltrado = myArray.filter((num) => num >10); 
console.log(myArrayFiltrado); 

//Map 
const frutas = ["Banana", "Anana", "Manzana", "Mandarina"]; 
const frutasMayuscula = frutas.map(fruta)

const productos = [
    {id: 1, nombre: "Azucar", precio:1800, disponible: true}, 
    {id: 2, nombre: "Yerba", precio: 1980, disponible: true},
    {id: 3, nombre: "Cafe", precio:3600, disponible: false}, 
    {id: 4, nombre: "Coco Cola", precio:1400, disponible: true}, 
    {id: 5, nombre: "Pepsi", precio:1350, disponible: false}, 
    {id: 6, nombre: "Harina", precio:900, disponible: true}, 
]

const stock = productos.map((producto) =>)

//Reduce
