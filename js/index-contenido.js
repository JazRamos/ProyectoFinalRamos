//DOM cuerpo index
const crearContenidoIndex = () => {
    let contIndex = document.getElementById("main-index")
    contIndex.innerHTML = `
    <div class="contenido-index text-wrap object-fit-sm-contain  ">
            <h1 >
                ¡Bienvenides!
            </h1>
            ¡Somos Cristales de la Nueva Era! En nuestra tienda encontrarás minerales que nos ofrece la Madre Tierra.
            Te invitamos a conocer este mundo único y que te animes a vivir tu propia experiencia cristalina.
        </div>
`;
}
crearContenidoIndex();