//objetos 
// const persona1 ={ //const : ya que no permite reasignar 
//     id: 1, 
//     nombre: "Ana",
//     apellido: "Salas", 
//     edad: 20, 
//     email: "ana@gmail.com"
// }
// // console.log(persona1)

// const persona2 ={ 
//     id: 2, 
//     nombre: "Francisco ",
//     apellido: "Giardelli", 
//     edad: 24,
//     email: "francisco@gmail.com"
// }

// // console.log(persona2)

// function Persona(persona){ //Pasamos un obejto literal 
//     this.id = persona.id; // Los this sirven para poder a tener en cuenta 
//     this.nombre = persona.nombre,
//     this.apellido = persona.apellido, 
//     this.edad = persona.edad; 
//     this.email= persona.email
// }
// const personaLiteral = new Persona ( //new genera una nueva instancia del objeto Persona 
//     {
//         id: 1, 
//         nombre: "Ana",
//         apellido: "Salas", 
//         edad: 20, 
//         email: "ana@gmail.com"
//     }
// )
// console.log(personaLiteral )

// const personaLiteral2 = new Persona ( //new genera una nueva instancia del objeto Persona 
//     {
//         id: 2, 
//         nombre: "Francisco ",
//         apellido: "Giardelli", 
//         edad: 24,
//         email: "francisco@gmail.com"
//     }
// )

// console.log(personaLiteral2); 


//FUNCIONES----------------------------------------------
// function Persona(id, nombre, apellido, edad, email){
//     this.id = id, 
//     this.nombre = nombre,
//     this.apellido = apellido, 
//     this.edad = edad, 
//     this.email= email
// }//Pasar parametros por parametros

// const anaPersona = new Persona(1,"Ana", "Salas", 40, "ana@gmail.com")
// console.log(anaPersona); 

// anaPersona.edad = 20; //Se accede y se le reasigna un nuevo valor 

// anaPersoan['mail'] = "anasalas@mail.com" //Otro forma de cambiar los valores 
// console.log(anaPersona); 

// function Gato(nombre, edad, raza, color, peso){
//     this.nombre = nombres; 
//     this.edada = edad; 
//     this.raza = raza; 
//     this.color = color; 
//     this.peso = peso; 
// }

// function Perro(nombre, edad, raza, color, peso){
//     this.nombre = nombres; 
//     this.edada = edad; 
//     this.raza = raza; 
//     this.color = color; 
//     this.peso = peso; 
// }

// const gatito = new Gato("Michi", 4, "Gato", "Blanco", 3)
// console.log(gatito); 

// const perrito = new Gato("Chester", 4, "Caniche", "Beige", 5)
// console.log(perrito); 

//CLASES
class Mascota{
    constructor(tipo, nombre, edad, raza, color, peso){
        this.tipo = tipo;
        this.nombre = nombre; 
        this.edad = edad; 
        this.raza = raza;  
        this.color = color; 
        this.peso = peso;

    }
    caminar (){
        console.log("Mi " + this.tipo + " "+ this.nombre + "esta caminando")
    }

    comer (){
        console.log("Mi " + this.tipo + " "+ this.nombre + "esta comiendo")
    } 
}

const perrito = new Mascota("Perro", "Daisy", 4, "Yorki", "Beige", 2.5)
const gatito = new Mascota("Gato", "Michi", 4, "Angora", "Blanco", 2.5)

console.log(perrito); 
console.log(gatito); 

perrito.comer(); 
gatito.comer(); 

