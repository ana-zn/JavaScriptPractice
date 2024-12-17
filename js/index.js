const shopContent = document.getElementById("shopContent");
const cartContent = document.getElementById("cartContent");
const totalPrice = document.getElementById("totalprice");
const totalPayButton = document.getElementById("totalpay");
let cart = [];

// Renderiza los productos en la tienda
productos.forEach((product) => {
    const content = document.createElement("div");
    content.classList.add("category__item");

    // Imagen del producto
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.productName;

    // Título, descripción y precio
    const title = document.createElement("h3");
    title.textContent = product.productName;

    const price = document.createElement("span");
    price.textContent = `$${product.price}`;

    const description = document.createElement("p");
    description.textContent = product.description;

    // Botón de agregar al carrito
    const addButton = document.createElement("button");
    addButton.textContent = "Agregar al carrito";
    addButton.addEventListener("click", () => addToCart(product));

    // Agregar elementos al contenedor del producto
    content.append(img, title, price, description, addButton);
    shopContent.append(content);
});

// Función para agregar productos al carrito
function addToCart(product) {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}
function subtractFromCart(id) {
    const item = cart.find((item) => item.id === id);

    if (item) {
        item.quantity--; // Restar cantidad
        if (item.quantity === 0) {
            removeFromCart(id); // Eliminar si la cantidad llega a 0
        } else {
            renderCart(); // Volver a renderizar el carrito
        }
    }
}

// Renderizar el carrito
function renderCart() {
    cartContent.innerHTML = ""; // Limpiar el carrito antes de renderizar
    let total = 0;

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart__item");

        cartItem.innerHTML = `
            <button class="remove-btn">✖️</button>
            <h4>${item.productName}</h4>
            <span>Precio: $${item.price * item.quantity}</span>
            <div id="quantity-control">
                <button class="add-btn">➕</button>
                <p class="quantity-text">${item.quantity}</p>
                <button class="subtract-btn">➖</button>
            </div>
        `;

        // Botón para eliminar producto
        const removeButton = cartItem.querySelector(".remove-btn");
        removeButton.addEventListener("click", () => removeFromCart(item.id));

        // Botón para agregar cantidad
        const addQuantityButton = cartItem.querySelector(".add-btn");
        addQuantityButton.addEventListener("click", () => addToCart(item));

        // Botón para restar cantidad
        const subtractQuantityButton = cartItem.querySelector(".subtract-btn");
        subtractQuantityButton.addEventListener("click", () => subtractFromCart(item.id));

        cartContent.append(cartItem);
        total += item.price * item.quantity;
    });

    // Actualizar el total en el carrito
    totalPrice.textContent = `${total}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    renderCart();
}

// Alerta al terminar la compra
totalPayButton.addEventListener("click", () => {
    const total = totalPrice.textContent || "0"; // Obtener el total actual
    alert(`El total de la compra es: $${total}\n¡Gracias por su compra!`);
});
