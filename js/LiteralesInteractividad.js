// const nombre = "Juan";
// const edad = 30;

// const contenedor = document.getElementById('info');

// contenedor.innerHTML = `
//   <h2>Información del Usuario</h2>
//   <p>Nombre: ${nombre}</p>
//   <p>Edad: ${edad}</p>
// `;

// const productos = [
//     { nombre: "Arroz", precio: 125 },
//     { nombre: "Fideos", precio: 70 },
//     { nombre: "Pan", precio: 50 }
//   ];
  
//   const contenedor = document.getElementById('productos');
  
//   contenedor.innerHTML = `
//     <h2>Lista de Productos</h2>
//     <ul>
//       ${productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('')}
//     </ul>
//   `; 

//Ejemplo Practico


let boton = document.getElementById("boton"); 
boton.addEventListener("click",function(){
  alert("El boton fue disparado")

}); 

let input = document.getElementById("input"); 
input.addEventListener ("input", function(){
  console.log("El usuario escribio: "+ this.value); 
}); 

let usuario= document.getElementById("select")
usuario.addEventListener("change", function(){
  console.log("El usuario selecciono la opcion: "+ this.value)
})