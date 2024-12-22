/*
Combinación de Consola, Prompt y Alert
Pide al usuario que ingrese su nombre y su edad utilizando un prompt.
Saluda al usuario utilizando un mensaje de alerta que contenga su nombre y su edad.
Calcula el año de nacimiento del usuario utilizando su edad ingresada y muestra este año en la consola.
Muestra un mensaje de alerta que indique si el usuario es menor de edad o mayor de edad, dependiendo de su edad ingresada.
Pide al usuario que ingrese dos números utilizando prompt y muestra la suma de estos números en una alerta.
Pide al usuario que ingrese su nombre utilizando prompt y luego muestra un mensaje en la consola que diga "Hola, [nombre]".
Pide al usuario que ingrese su año de nacimiento y muestra su edad en la consola.
Pide al usuario que ingrese su mes de nacimiento y muestra su signo zodiacal en la consola.
Solicita al usuario que ingrese un número y muestra un mensaje de alerta indicando si el número es par o impar.
Pide al usuario que ingrese su color favorito y muestra un mensaje en la consola que diga "Tu color favorito es [color]".
Pide al usuario que ingrese su país de residencia y muestra un mensaje de alerta que diga "Vives en [país]".
Pide al usuario que ingrese su código postal y muestra un mensaje en la consola con ese código postal.
Solicita al usuario que ingrese el nombre de su libro favorito y muestra un mensaje de alerta con ese nombre.
Pide al usuario que ingrese su programa de televisión favorito y muestra un mensaje en la consola con ese programa.
Solicita al usuario que ingrese su superhéroe favorito y muestra un mensaje de alerta con ese superhéroe.
Pide al usuario que ingrese el nombre de su mejor amigo y muestra un mensaje en la consola con ese nombre.
Solicita al usuario que ingrese su número de la suerte y muestra un mensaje de alerta con ese número.
Pide al usuario que ingrese su día de la semana favorito y muestra un mensaje en la consola con ese día.
Solicita al usuario que ingrese su estación del año favorita y muestra un mensaje de alerta con esa estación.
 */

//1.Pide al usuario que ingrese su nombre y su edad utilizando un prompt.
//Pide al usuario que ingrese su nombre utilizando prompt y luego muestra un mensaje en la consola que diga "Hola, [nombre]".
// let name = prompt("Ingresa tu nombre"); 
// alert ("Hola! " + name + " espero que estes muy bien"); 

//2. Saluda al usuario utilizando un mensaje de alerta que contenga su nombre y su edad.
// let edad = prompt("¿Cuantos años tenes? " + name); 
// alert (name +" tu edad es " + edad);

//3. Calcula el año de nacimiento del usuario utilizando su edad ingresada y muestra este año en la consola.
// let nacimiento = 2024 - edad; 
// alert ("¡"+ name+ " naciste en el "+ nacimiento+"!"); 

//4. Muestra un mensaje de alerta que indique si el usuario es menor de edad o mayor de edad, dependiendo de su edad ingresada.
// if (edad<=18){
//     alert(name + " Eres menor de edad")
// } else {
//     alert (name + " Eres mayor de edad")
// }

//5. Pide al usuario que ingrese dos números utilizando prompt y muestra la suma de estos números en una alerta.
// let a = parseInt(prompt(name + "Ingrese un primer número: ")); 
// let b = parseInt(prompt(name + "Ingrese un segundo número: ")); 
// suma = a + b; 
// alert ("La suma de" + a + " y " + b + "es de: "+ suma); 

//6. Pide al usuario que ingrese su año de nacimiento y muestra su edad en la consola.
// let c = parseInt(prompt("Solo para confirmar me puedes decir tu año de nacimiento: "))
// edad = 2024 - c; 
// alert ("Entonces tienes: " + edad)

//7.Pide al usuario que ingrese su mes de nacimiento y muestra su signo zodiacal en la consola. 

//8.Solicita al usuario que ingrese un número y muestra un mensaje de alerta indicando si el número es par o impar.

//9. Pide al usuario que ingrese su color favorito y muestra un mensaje en la consola que diga "Tu color favorito es [color]".
// let color = prompt("¿Cual es tu color favorito?: " )
// alert("Tu color favorito es:" + color)

//10. Pide al usuario que ingrese su país de residencia y muestra un mensaje de alerta que diga "Vives en [país]". 
// let pais = prompt ("En que pais vives?")
// alert("Vos vivis en:" + pais); 

//11. Pide al usuario que ingrese su código postal y muestra un mensaje en la consola con ese código postal. 
// let postal = prompt("Puedes ingresar tu numero postal: ")
// alert ("Tu codigo postal es: " + postal); 

//12.Solicita al usuario que ingrese el nombre de su libro favorito y muestra un mensaje de alerta con ese nombre.

// let libro = prompt("¿Cual es tu libro favorito?")
// alert ("Tu libro favorito es:" + libro); 

// 13.Pide al usuario que ingrese su programa de televisión favorito y muestra un mensaje en la consola con ese programa.
// 14.Solicita al usuario que ingrese su superhéroe favorito y muestra un mensaje de alerta con ese superhéroe.
// 15.Pide al usuario que ingrese el nombre de su mejor amigo y muestra un mensaje en la consola con ese nombre.
// 16.Solicita al usuario que ingrese su número de la suerte y muestra un mensaje de alerta con ese número.
// 17.Pide al usuario que ingrese su día de la semana favorito y muestra un mensaje en la consola con ese día.
let d = parseInt(prompt("Ingresa un numero del 1 al 7 para definir tu dia de la semana favorito: ")); 
if(d === 1){
    alert ("Tu dia de la semana favorito es Lunes")
} else if (d === 2 ){
    alert ("Tu dia de la semana favorito es Martes")
} else if (d === 3 ){
    alert ("Tu dia de la semana favorito es Miercoles")
} else if (d === 4 ){
    alert ("Tu dia de la semana favorito es Jueves")
} else if (d === 5 ){
    alert ("Tu dia de la semana favorito es Viernes")
} else if (d === 6){
    alert ("Tu dia de la semana favorito es Sabdo")
} else if (d === 7 ){
    alert ("Tu dia de la semana favorito es Domingo")
} 
else{
    alert ("Numero ingresado INCORRECTO: "); 
}
//18.Solicita al usuario que ingrese su estación del año favorita y muestra un mensaje de alerta con esa estación.