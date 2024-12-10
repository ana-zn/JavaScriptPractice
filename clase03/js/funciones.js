
function saludar() {
    console.log("¡Hola, mundo!");
}

saludar();  // Muestra: ¡Hola, mundo!


function sumar(a, b)//parametros
 {
    return a + b;
}

let resultado = sumar(5, 3); //argumentos 
console.log(resultado);  // Muestra: 8


function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
} //Esta funcion ilustra como un bloque de codigo simple puede ser reutilizado para calcular el area de un triangulo donde sea necesario en el programa 