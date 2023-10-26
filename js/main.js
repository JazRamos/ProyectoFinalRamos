let carrito = JSON.parse(localStorage.getItem('productos')) || [];
const cardsProductos = document.getElementById("cristales")
const ocCuerpo = document.getElementById("offcanvasCuerpo");

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
    let botonBorrar = document.getElementsByClassName ("btnRemover");

    for (const boton of botones) {
        boton.addEventListener('click', () => {
            const productoEnCarrito = lista.find((productos) => productos.id == boton.id);
            devolverCompra(productoEnCarrito);
            console.table(productoEnCarrito); 
            
            
            for (let i = 0; i < botonBorrar.length; i++) {
                let button = botonBorrar[i]
                button.addEventListener('click', borrarItem)
        }});
        
    }
    function borrarItem(event) {
        let botonClickeado = event.target
        botonClickeado.parentElement.remove()
        actualizarTotal()
    }
    
    //Luego de quse se detecta el producto seleccionado con addEventListener, pop up avisando la acción realizada. Se va imprimiendo en consola una lista con los productos que se van seleccionando.
    function devolverCompra(producto) {
        carrito.push(producto);
            ocCuerpo.innerHTML += `
            <div class=" listaCarro list-group">
            <a class="carroItem list-group-item">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${producto.nombre}</h5> </div>
            <p class="precioCarro mb-1">$ ${producto.precio}</p>
            <p class="cantidadCarro mb-1">1 </p></a>
            <button class= "btnRemover btn btn-danger">Borrar</button>
    </div> 
 
  `;
  const subTotal = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);
  console.log('Total a pagar $' + subTotal);
  document.getElementsByClassName('carroTotal').innerHTML = 'Total a pagar $:' + subTotal;
  
        Toastify({
            text: "Agregaste " + producto.nombre + " a tu carrito!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #809BCE)",
            }
        }).showToast();

        
    }
    
}
cristalesCards(productos);

//Se trae el JSON de productos con fetch, lo imprime por consola. Si por alguna razón no lo encuentra, imprime el error por alert.
function obtenerJSON() {
    const URLJSON = '/productos.json';
    fetch(URLJSON)
        .then((result) => result.json())
        .then((productos) => {
            console.log(productos);

        })
        .catch((error) => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        }))
}
obtenerJSON();











