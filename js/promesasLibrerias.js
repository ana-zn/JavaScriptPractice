//Ejemplo de uso de Promesas 
// const obtenerDatos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true; // Cambia esto para probar diferentes resultados
//             if (exito) {
//                 resolve("Datos obtenidos correctamente");
//             } else {
//                 reject("Error al obtener los datos");
//             }
//         }, 2000);
//     });
// };

// obtenerDatos()
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("Operación completada.");
//     });

//Ejemplo Practico 


const usuarios = [
    {
        id: 1, 
        nombre: "Maria", 
    },
    {
        id: 2, 
        nombre: "Araceli", 
    },
    {
        id: 3, 
        nombre: "Pedro", 
    },
]

function getDatos(){
    return usuarios 
}

console.log("Datos obtenidos inmediatamente", getDatos())

function getDatosConDemora(){

    setTimeout(()=>{
        return usuarios; 
    },2000); 
}

console.log("Datos con demora sin promesas", getDatosConDemora())

function getDatosPromesas(){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            // resolve(usuarios)
            reject("Nose accede a los datos de nuestro array")
        },2000)
    })
}

getDatosPromesas()
    .then(datos=>{
        console.log("datos obtenidos con promesas: ", datos)
    })

    .catch(error => {
        console.error("Error capturado: ", error); 
    })