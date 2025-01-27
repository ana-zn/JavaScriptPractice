//Call Stack 

// function first() {
//     console.log("Primera función");
//     second();
//     console.log("Primera función - Parte 2");
// }

// function second() {
//     console.log("Segunda función");
// }
// first();


//Event Loop 

// console.log("Inicio");

// setTimeout(() => {
//     console.log("Esto es asincrónico");
// }, 2000);

// console.log("Fin");

//Actividad Practica 
const url = 'https://jsonplaceholder.typicode.com/posts'; 

async function getData() {

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log("datos recibidos: ", data)
    }catch(error){
        console.error("hay un error revisar", error); 
    }
}

getData()