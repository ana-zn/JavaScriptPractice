//funciones constructores: nos permiten crear objetos, su particularidad es que trabaja con el operador new

//Ejemplo de Uso Pre-ES6 ------------------
// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//     this.describir = function() {
//         return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
//     };
// }

// // Crear un nuevo objeto Persona
// var persona1 = new Persona("Ana", 25, "Calle Falsa 123");
// console.log(persona1.describir());

//Comparación con Clases en ES6--------------------
class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    describir() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
    }
}

// Crear un nuevo objeto Persona
const persona1 = new Persona("Ana", 25, "Calle Falsa 123");
console.log(persona1.describir());

//funciones constructores: nos permiten crear objetos, su particularidad es que trabaja con el operador new
function persona2(nombre, edad){
    this.nombre= nombre; 
    this.edad = edad; 
    
    this.saluda = function(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`)
    }
}

let persona2 = new Persona ("Juan", 31)

console.log(persona2.nombre); 
console.log(persona2.edad)
persona2.saluda(); 
