//DOM barra de navegación global
const crearNav = () => {
  let nav = document.getElementById("barraNav")
  nav.innerHTML = `
  <nav class="navbar navbar-expand-lg ">
 <a class="navbar-brand " href="./index.html">
     <img src="https://res.cloudinary.com/diklj3m6q/image/upload/v1696572664/okRecurso_1-8_twei90.png"
         alt="cristales-logo" width="50" height="50"></a>
 <div class="navbar-nav nav-underline me-auto mb-2 mb-lg-0 ">
     <a class="nav-link " href="./index.html">Inicio</a>
     <a class="nav-link" href="./comprar.html">Tienda</a> 
 </div>
</nav>
`;
}
 crearNav();




