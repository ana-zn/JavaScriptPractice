// console.log(document); 

const d = document; 
// console.log(d.head); 
// console.log(d.body); 

const title = d. getElementById('titulo').innerText; 
// console.log(title); 

const titulo =d.getElementsByTagName ('title');

// console.log(titulo[0]); //Accede a la etiqueta del indice 0 

titulo[0].innerText = title; 

const contenedores = d.getElementsByClassName(contenedores); 

// console.log(contenedores); 

contenedores[0].innerHTML = `<h2>Contnedor  <strong>1</strong> </h2>`

const personasArray = [
    "Ana", 
    "Gonzalo", 
    "Francisco", 
    "Guillermo", 
    "Mauro", 
    "Alejandro"
]

function cargarNombresAlDOM(){

    const  tituloLocal = "Persona Cargadas"
    d.getElementById('tituloPersonas').innerHTML = tituloLocal; 

    const personasUl = d.getElementById('personas'); 
    for(const persona of personasArray){
        let li = d.createElement('li'); 

        li.innerHTML = `<h4> Nombre: ${persona}</h4>`; 
        personasUl.appendChild(li); 

    }
}

cargarNombresAlDOM(); 