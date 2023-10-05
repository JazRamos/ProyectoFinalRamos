let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const cardsProductos = document.getElementById("cristales");


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
                    <button type=${prod.id} class="  btn btn-info bi bi-cart2 fw-semibold compra"> Comprar</button>
                </div>
            </div>
        `;
    } 

    let botones = document.getElementsByClassName('compra');
    for (const boton of botones) {
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id);
            const prodACarro = lista.find((productos) => productos.id == boton.id);
            console.log(prodACarro);
            agregarAlCarrito(prodACarro);
        });
    }

    function agregarAlCarrito(productos) {
        carrito.push(productos);
        console.table(carrito);
    }
}

cristalesCards(productos);



function obtenerJSON(){
    const URLJSON='/productos.json';
    fetch(URLJSON)
        .then((result) => result.json())
        .then((productos) => {
            console.log(productos);
            const cristalesCards = productos.cristales; 
        })
        .catch((e)=> console.log(e))
}

obtenerJSON();





