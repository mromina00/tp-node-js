const URL = "https://grupo11.alwaysdata.net";

document.querySelector("#addAutoModal form").onsubmit = agregarAuto;
document.querySelector("#deleteAutoModal form").onsubmit = borrarAuto;

const getModalById = id => bootstrap.Modal.getOrCreateInstance(document.getElementById(id));

const ocultarModal = idModal => {
    getModalById(idModal).hide();
}



obtenerTodosLosAutos();
