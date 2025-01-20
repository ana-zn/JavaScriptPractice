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

// const perrito = new Mascota("Perro", "Daisy", 4, "Yorki", "Beige", 2.5)
// const gatito = new Mascota("Gato", "Michi", 4, "Angora", "Blanco", 2.5)

// console.log(perrito); 
// console.log(gatito); 

// perrito.comer(); 
// gatito.comer(); 

// perrito.comer(); 
// gatito.comer(); 

// function caminar() {
//     console.log("Mi " + perrito.tipo + " "+ perrito.nombre + " esta caminando.!")
// }; 

// caminar()

//AlMACENAMIENTO 

// let mensaje = "Hola desde Coder"; 
// let mensaje = "Hola dessde Coderhouse"; 
// localStorage.setItem('mensaje', mensaje); 

// console.log(localStorage.getItem('mensaje')); 

// localStorage.setItem('numero', 89); 
// localStorage.getItem('boleno', true); 

// localStorage.setItem('Perro', perrito); // No se va a ver por consola ya que solo guarda valores en formato string 
// localStorage.setItem('Perro',JSON.stringify(perrito)); 
// localStorage.setItem('Perro',JSON.stringify(Gatito)); 
// const carrito = []; 
// localStorage.setItem('carrito', carrito); 


// console.log(typeof perrito)
// console.log(typeof JSON.stringify(perrito))


// const perritoComoSring = localStorage.getItem('Perro'); 
// console.log(perritoComoSring); 

// const perritoComoObject = JSON.parse(localStorage.getItem('Perro')); 
// console.log(perritoComoObject); 

// localStorage.removeItem('numero'); 
// localStorage.removeItem('booleans'); 

// localStorage.clear(); 

// for(let i = 0; i <localStorage.length;  i++){
//     let claver = localStoragekey(i); 
//     console.log("Para la clave: " + clave + "\nValor" + localStorage.getItem(clave)); 
// }

// const guardarEnElLocalSorage = (clave, valor) =>{
//     localStorage.setItem(clave,valor)
// }

// function Perro(nombre, edad, raza, color, peso){
//     this.nombre = nombres; 
//     this.edada = edad; 
//     this.raza = raza; 
//     this.color = color; 
//     this.peso = peso; 
// }

// const perrito = new Perro ("Daisy", 4, "Yorki", "Biege", 2.5); 

// guardarEnElLocalSorage("Perro", JSON.stringify(perrito)); 

// guardarEnElLocalSorage(perrito.nombre, JSON.stringify(perrito)); 

// localStorage.clear(); 


const perrito = new Mascota("Perro", "Daisy", 4, "Yorki", "Beige", 2.5);
const perrito1 = new Mascota("Perro", "Max", 6, "Collie", "Beige", 25);
const gatito = new Mascota("Gato", "Michi", 4, "Gato", "Blanco", 3);
const gatito1 = new Mascota("Gato", "Tom", 9, "Persa", "Negro", 5);

const arrayDeMascotas = []

arrayDeMascotas.push(perrito);
arrayDeMascotas.push(perrito1, gatito, gatito1);

console.log(arrayDeMascotas);

for (const mascota of arrayDeMascotas){
    guardarEnElLocalStorage(mascota.nombre, JSON.stringify(mascota));
}

for (const mascota of arrayDeMascotas){
    guardarEnElLocalStorage('Mascota', JSON.stringify(mascota));
}

// for (const mascota of arrayDeMascotas){
    guardarEnElLocalStorage('Mascotas', JSON.stringify(arrayDeMascotas));
// }