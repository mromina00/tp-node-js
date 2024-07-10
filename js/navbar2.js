let cad2 = `
    <nav class="nav">
        <a href="index.html" class="logo">
          <img src="../img/logonavbar.webp" alt="logo dangel motors">
        </a>
        <ul class="navbar">
          <li><a href="../index.html">Inicio</a></li>
          <li><a href="./nosotros.html">Sobre Nosotros</a></li>
          <li><a href="./catalogo.html">Vehículos</a></li>
          <li><a href="./contacto.html">Contacto</a></li>
          <li><a href="./listadodeautos.html">CRUD</a></li>
        </ul>
        <!-- ícono menú desplegable -->
        <button class="navtoggle">
            <i class='bx bx-menu'></i>
        </button>
    </nav>
    <div class="menu-desplegable">
        <div class="li">
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="./nosotros.html">Nosotros</a></li>
            <li><a href="./catalogo.html">Vehículos</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
            <li><a href="./listadodeautos.html">CRUD</a></li>
        </div>
    </div>
`

document.querySelector(".header2").innerHTML = cad2

//Menú Desplegable
const navtoggle = document.querySelector('.navtoggle')
const toggle_icon = document.querySelector('.navtoggle i')
const menu_desplegable = document.querySelector('.menu-desplegable')

navtoggle.onclick = function (){
  menu_desplegable.classList.toggle('open');
  const isOpen = menu_desplegable.classList.contains('open');

  toggle_icon.classList = isOpen
  ? 'bx bx-x'
  : 'bx bx-menu'
}