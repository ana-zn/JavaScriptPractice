//Arrays 

//Definir los arrays como variables "const" ya que esto no permite reasignar el array
// const miarrayNumeros = [1,2,-10,0,2.2,8,-14,0,1,99]; 

// console.log(miarrayNumeros); 
// console.log(typeof miarrayNumeros)

// miarrayNumeros = [5]; 
// console.log(miarrayNumeros)


// Los arrays tienen sus propios metodos()
// miarrayNumeros.push(5); 
// miarrayNumeros.push(99); 
// miarrayNumeros.push(10111); 
// miarrayNumeros.pop(); //Elimina el ultimo indice
// miarrayNumeros.shift(); //Elimina el primer elemento 
// miarrayNumeros.unshift(1) //Agrega en el indice 0 (no es recomendanle )
 
// console.log(miarrayNumeros);

// console.log(miarrayNumeros.length); // Devuelve un número entero, e la cantidad de elementos del array 
// console.log(miarrayNumeros[9]); 
// for(let i = 1; 1 <miarrayNumeros.length +1; i++){
//     console.log("En el indice: "+ i + "esta el valor: " + miarrayNumeros[i]); 
// }

// console.log(miarrayNumeros.join(" | ")); // Convierte el array en una cadena de texto 

// console.log(miarrayNumeros.indexoff(8)); //Retorna un numero entero -> Indice del elemento 

// console.log(miarrayNumeros.indexOf(2.2)); 
// console.log(miarrayNumeros.indexOf(0)); 
// console.log(miarrayNumeros.indexOf(99)); 
// console.log(miarrayNumeros.indexOf(99)); 
// console.log(miarrayNumeros.indexOf(-99)); //Retorna -1 porque el valor no existe en el array 

// console.log(miarrayNumeros.includes(0));  //Retorna true si existe
// console.log(miarrayNumeros.includes(-99)); //Retorna false si no existe


// const  miarrayStrings = ["Hola", "Mundo", "Coderhouse"]; 
// for(let i = 0; i <miarrayStrings.length; i++){
//     console.log("En el indice; " + i + "esta el valor" + miarrayStrings[i]); 
// }
// console.log(miarrayStrings.includes("Coderhouse")); 

// console.log(miarrayStrings.sort()); //Ordena Alfabeticamente -> (No es recomendable)
// console.log(miarrayStrings.sort().reverse()); Ordena Alfabeticamente en forma descendente 


//Objeto------------------------------------------------
// const producto =[
//     {
//         id: 1,
//         nombre: "Azucar", 
//         precio
    
//     },
//     {
//         id: 2,
//         nombre: "Yerba", 
//         precio: 1890,
    
//     },
//     {
//         id: 3,
//         nombre: "Café", 
//         precio:6500,
    
//     },
//     {
//         id: 4,
//         nombre: "Coca Cola", 
//         precio: 1950,
    
//     },
//     {
//         id: 5,
//         nombre: "Pepsi", 
//         precio: 1750,
    
//     }

// ]; 

//Esto se extrae del objeto 
// console.log(producto); 
// console.log(producto[0].nombre); 
// console.log(producto[0].precio); 


//Agrega un nuevo producto al array 
// producto.push(
//     {
//         id:6,
//         nombre: "Harina",
//         precio: 1500, 
//         stock: 12000, 
//     }
// ); 

// const productoNuevo = {
//     id:7, 
//     pais: "Argentina",
//     provincia: "Bs As", 
//     cuidad: "Quilmes", 
//     nombre: "Cafetera", 
//     precio: 1999999.99,
//     stock: 6, 
// }

// producto.push(productoNuevo); //Agrega un nuevo producto 

//CLASE ---------------------------------------------------
class Producto{ //Las clases siempre se declaran en Mayuscula
    constructor(id, nombre, precio, stock) {
        this.id=id; 
        this.nombre = nombre
        this.precio = precio
        this.stock=stock
    }

    //Se le puede agregar metodos, siempre y cuando este dentro de la clase 
    sumarIva(){
        this.precio = ((this.precio = 1.21).toFixed(2)); 
    }
}

//Crear los productos 
const productoS = []; //Definimos un array vacio 
productos.push(new Producto(1, "Azucar", 1250 ,10)); //Con new se crea un instancia de producto
productos.push(new Producto(2, "Yerba", 1890 , 35)); 
productos.push(new Producto(1, "Café", 6500 , 50)); 
productos.push(new Producto(1, "Coca Cola", 1980 , 180)); 



const productox = new Producto(5, "pepsi", 1250, 65); //Definir el proudcto 
productox.sumarIva();
console.log(productox.precio); 
//console.log(producto);

for (const producto of producto){
    producto.sumarIva(); 
    console.log(`El producto con Ic: ${producto}. El Precio de ${producto.nombre} es de ${producto.precio}, y existen${precio.stock}`); 
}


//Agrega el producto al array 
producto.push(productox)