function Persona(nombre, edad){
    this.nombre = nombre; 
    this.edad = edad; 

    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`);  
    }
}
let persona1 =  new Persona("Juan", 33); 
console.log(persona1.nombre); 
console.log(persona1.edad)

persona1.saludadar(); 