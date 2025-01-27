//Ejermplo Sincronica
// console.log("Inicio");
// let resultado = operacionLenta(); // Supongamos que esta función tarda 5 segundos en completarse
// console.log("Resultado:", resultado);
// console.log("Fin");

//Ejemplo Asincronico 

// console.log("Inicio");

// setTimeout(() => {
//     console.log("Esto se ejecuta después de 2 segundos");
// }, 2000);

// console.log("Fin");

// Actividad practica 

const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url)
//     .then(Response=> Response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(errror => {
//         console.error("ocurrio un error", errror)
//     })

async function fetchData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)    
}

fetchData()