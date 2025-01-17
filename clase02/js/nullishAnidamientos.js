let inputUsuario;
let nombreUsuario = inputUsuario ?? "Invitado";
console.log(nombreUsuario); // Imprime "Invitado"

let configuracionUsuario = {
    elementosMostrados: 0
  };
  
  let cantidadElementos = configuracionUsuario.elementosMostrados ?? 10;
  console.log(cantidadElementos); // Imprime 0