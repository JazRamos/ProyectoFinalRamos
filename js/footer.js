//DOM footer global 
const crearFooter = () => {
    let nav = document.getElementById("footerNav")
    nav.innerHTML = `
    <div class="navbar sticky-bottom justify-content-center">
    <a class="navbar-brand" href="https://www.instagram.com/cristales_de_la_nueva_era/">
        <i class="bi bi-instagram"></i></a>
    <a class="navbar-brand" href="https://www.facebook.com/profile.php?id=100063907451281">
        <i class="bi bi-facebook"></i></a>
</div>
`;
}
crearFooter();