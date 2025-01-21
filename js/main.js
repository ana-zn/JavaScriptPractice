const Servicios = [
    {
        id: 1, 
        servicesName: "Visita Guiada", 
        description: "Sumérgete en el arte del vino con nuestro recorrido guiado. Descubre el proceso detrás de cada copa, desde los viñedos hasta la cava, de la mano de expertos en enología.", 
        duration: "1:30 hrs", 
        day: "Lunes a Domingo",
        minPerson: "Min: 2 personas", 
        price: 2300, 
        img: "/img/ruta_a_la_imagen.jpg" // Ruta válida
    }
];

const shopContent = document.getElementById("ServicesContent"); 

Servicios.forEach((product) => {
    const content = document.createElement("div"); 
    content.classList.add("category__item"); 

    // Imagen
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.servicesName;

    // Título
    const title = document.createElement("h3");
    title.textContent = product.servicesName;

    // Descripción
    const description = document.createElement("p");
    description.textContent = product.description;

    // Precio
    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    // Botón
    const addButton = document.createElement("button"); 
    addButton.textContent = "Agregar al carrito";
    addButton.addEventListener("click", () => addToCart(product));

    // Ensamblar elementos
    content.append(img, title, price, description, addButton);
    shopContent.append(content);
    console.log("Producto agregado al DOM:", product.servicesName);
});

// Función provisional para agregar al carrito
function addToCart(product) {
    console.log("Producto agregado al carrito:", product);
}
