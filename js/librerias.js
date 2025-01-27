
// fetch('https://cdn.jsdelivr.net/npm/sweetalert2@11/sweetalert2.min.js')
//     .then(response => response.text())
//     .then(script => {
//         const scriptTag = document.createElement('script');
//         scriptTag.textContent = script;
//         document.body.appendChild(scriptTag);
//         Swal.fire('Librería cargada con éxito!');
//     })
//     .catch(error => console.error('Error cargando la librería:', error));


//Sweet Alert 


document.getElementById("Boton").addEventListener("click",()=>{
    Swal.fire({
        title:"¡Alerta Basica!",
        text: "Esta accion no es irreversible",
        icon:"warning", 
        showCancelButton: true,
        confirButtonText: "Si, eliminar", 
        cancelButtonText: "cancelar"
    });
})