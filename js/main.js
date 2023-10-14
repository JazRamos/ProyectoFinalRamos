let carrito = JSON.parse(localStorage.getItem('productos')) || [];
const cardsProductos = document.getElementById("cristales");
let boton = document.getElementsByClassName ("compraProducto");
//Dom cards de productos
function cristalesCards(lista) {
    for (const prod of lista) {
        cardsProductos.innerHTML += `
            <div class="card border border-success border-3 border-opacity-50" style="width: 16rem;" >
                <img src= ${prod.foto} class="card-img-top rounded mx-auto d-block img-fluid" alt="${prod.nombre}"/>
                <div class="card-body">
                    <h5 class="card-title fs-5 fw-bolder">${prod.nombre}</h5>
                    <p class="card-text">
                    ${prod.descripcion} 
                    </p><p class="card-text fs-5 fw-semibold">$${prod.precio} </p>
                    <button id=${prod.id} class="compraProducto btn btn-info bi bi-cart2 fw-semibold">Comprar</button>
                    
                </div>
            </div>
        `;

    }
//Evento boton de COMPRA, imprime en consola que producto es seleccionado 
    let botones = document.getElementsByClassName('compraProducto');
    for (const boton of botones) {
        boton.addEventListener('click', () => {
            console.log('Click id es ' + boton.id);
            const productoEnCarrito = lista.find((productos) => productos.id == boton.id);
            console.log(productoEnCarrito);
            agregarAlCarrito(productoEnCarrito);

            
        });
    }

    //Luego de que se detecta el producto seleccionado con addEventListener, pop up avisando la acción realizada. Se va imprimiendo en consola una lista con los productos que se van seleccionando.
    function agregarAlCarrito(producto) {
        carrito.push(producto);
        console.table(carrito);    
        Toastify({
            text: "Agregaste " + producto.nombre + " a tu carrito!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #809BCE)",
            }
          }).showToast();
     

}}
cristalesCards(productos);
//Se trae el JSON de productos con fetch, lo imprime por consola. Si por alguna razón no lo encuentra, imprime el error por alert.
function obtenerJSON() {
    const URLJSON = '/productos.json';
    fetch(URLJSON)
        .then((result) => result.json())
        .then((productos) => {
            console.log(productos);
        })
        .catch((error) => alert(error))
}
obtenerJSON();











