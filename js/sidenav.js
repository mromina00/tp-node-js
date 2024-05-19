function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("catalogoDeAutos").style.marginLeft = "250px";
    document.getElementById("body").classList.add("overlay-active");
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("catalogoDeAutos").style.marginLeft = "0";
    document.getElementById("body").classList.remove("overlay-active");
  }