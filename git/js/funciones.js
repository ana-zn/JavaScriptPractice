/*


Funciones Flecha
Declara una variable llamada doble y asígnale una función flecha que tome un número como parámetro y devuelva el doble de ese número.
Llama a la función flecha almacenada en la variable doble para calcular el doble de un número e imprime el resultado en la consola.
Ejercicios Básicos de JavaScript para Cálculos Geométricos
Cálculo del Área de un Triángulo
Crea una función llamada areaTriangulo que tome la base y la altura de un triángulo como parámetros y devuelva el área del triángulo.
Llama a la función areaTriangulo con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.
Cálculo del Perímetro de un Cuadrado
Crea una función llamada perimetroCuadrado que tome el lado de un cuadrado como parámetro y devuelva el perímetro del cuadrado.
Llama a la función perimetroCuadrado con el valor del lado proporcionado por el usuario e imprime el resultado en la consola.
Cálculo del Área de un Círculo
Crea una función llamada areaCirculo que tome el radio de un círculo como parámetro y devuelva el área del círculo.
Llama a la función areaCirculo con el valor del radio proporcionado por el usuario e imprime el resultado en la consola.
Cálculo del Perímetro de un Rectángulo
Crea una función llamada perimetroRectangulo que tome la longitud y la anchura de un rectángulo como parámetros y devuelva el perímetro del rectángulo.
Llama a la función perimetroRectangulo con valores de longitud y anchura proporcionados por el usuario e imprime el resultado en la consola.
Cálculo del Área de un Trapecio
Crea una función llamada areaTrapecio que tome las bases y la altura de un trapecio como parámetros y devuelva el área del trapecio.
Llama a la función areaTrapecio con valores de las bases y la altura proporcionados por el usuario e imprime el resultado en la consola.

 */

//Variables Locales y Globales
//-------------------------------------------COMPLETADO
//1. Declara una variable global llamada mensaje y asígnale un mensaje.
let mensaje = "¡Hola, Bienvenido al Codigo"

//-------------------------------------------COMPLETADO
//Crea una función llamada saludar que imprima en la consola el valor de la variable mensaje.
function saludar(){
    console.log(mensaje); 
}

//Llama a la función saludar para que imprima el mensaje.
//-------------------------------------------COMPLETADO
saludar(); 

//Funciones
//Crea una función llamada sumar que tome dos números como parámetros y devuelva la suma de ellos.
//-------------------------------------------COMPLETADO
function sumar (a,  b){
    return a + b; 
}

let resultado = sumar(2, 8); 
console.log(resultado)

//Llama a la función sumar con dos números como argumentos e imprime el resultado en la consola.
//-------------------------------------------COMPLETADO
let resultado2 = sumar (7, 8); 
let resultado3 = sumar (5, 6); 

console.log(resultado3)
console.log(resultado2)

// Funciones con Parámetros
//-------------------------------------------COMPLETADO
// Crea una función llamada multiplicar que tome tres números como parámetros y devuelva el resultado de multiplicarlos.


function multiplicar(a, b, c){
    return a * b * c; 
}
let resultadoMultiplicacion = multiplicar(2, 2 , 2); 
console.log(resultadoMultiplicacion)

//Llama a la función multiplicar con tres números como argumentos e imprime el resultado en la consola.
//-------------------------------------------COMPLETADO

let rstd = multiplicar(5, 5, 5)
console.log(rstd)

//Funciones Anónimas
//Declara una variable llamada cuadrado y asígnale una función anónima que tome un número como parámetro y devuelva el cuadrado de ese número.
//-------------------------------------------COMPLETADO

const cuadrado = function(num){
    return num**2; 
}

//Utiliza la función anónima almacenada en la variable cuadrado para calcular el cuadrado de un número e imprime el resultado en la consola.
//-------------------------------------------COMPLETADO
let resultad = cuadrado(7); 
console.log(cuadrado(5))
console.log(`El cuadrado de 5 es : ${resultad}`); 

// Funciones Flecha

// Declara una variable llamada esPar y asígnale una función flecha que tome un número como parámetro y devuelva true si es par y false si es impar.
//-------------------------------------------COMPLETADO
const esPar = (num) => num %2===0;
console.log(esPar(5)); 
console.log(esPar(4)); 

// Utiliza la función flecha almacenada en la variable esPar para determinar si un número ingresado por el usuario es par o impar e imprime el resultado en la consola.
//-------------------------------------------COMPLETADO
// let num = parseInt(prompt("Ingrese un número: ")); 
// console.log(esPar(num)); 

// Variables Locales y Globales
// Dentro de una función, declara una variable local llamada contador y asígnale un valor.
//-------------------------------------------COMPLETADO
// Intenta acceder a la variable contador desde fuera de la función y observa el resultado.
//-------------------------------------------COMPLETADO
function pruebaContador() {
    let contador = 10; 
    console.log(`Dentro de la función ${contador}`)
}
// pruebaContador(); 
// console.log(`Fuera de la función ${contador}`) //Lanzara error 

// Funciones
// Crea una función llamada saludarNombre que tome un nombre como parámetro y devuelva un mensaje de saludo con ese nombre.
//-------------------------------------------COMPLETADO
function saludarNombre(nombre){
    return `Hola, ${nombre}!`
}
console.log(saludarNombre("Ana"))

// Llama a la función saludarNombre con tu nombre como argumento e imprime el mensaje en la consola.
//-------------------------------------------COMPLETADO
console.log(saludarNombre("Matteo")); 


// Funciones con Parámetros
// Crea una función llamada calcularAreaRectangulo que tome dos parámetros (base y altura) y devuelva el área del rectángulo.

function calcularAreaRectangulo(base, altura ) {
    return base * altura; 
}
console.log(calcularAreaRectangulo(5,10))

// Llama a la función calcularAreaRectangulo con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.
//-------------------------------------------COMPLETADO
// let base1 = parseInt(prompt("Ingrese la base de su rectangulo: "))

// let altura1 = parseInt(prompt("Ingrese la base de su rectangulo: "))

// console.log(calcularAreaRectangulo(base1, altura1)); 

// Funciones Anónimas
// Crea una función anónima que tome dos números como parámetros y devuelva el mayor de los dos.
//-------------------------------------------COMPLETADO
const mayornum = function (num1, num2){
    return num1 > num2 ? num1 : num2; 
}

console.log(mayornum(10, 5)); 
console.log(mayornum(14,56)); 

// Utiliza la función anónima creada para determinar el número más grande de dos números ingresados por el usuario e imprime el resultado en la consola.
//-------------------------------------------COMPLETADO
let numa = parseInt(prompt("Ingrese un primer numero: "))
let numb = parseInt(prompt("Ingrese un segundo numero: "))

console.log(mayornum(numa, numb))