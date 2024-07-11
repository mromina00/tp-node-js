

function cargarAutos(data){
    const cuerpoDeTabla = document.querySelector("#tablaDeAutos>tbody");
    cuerpoDeTabla.innerHTML = "";
    data.forEach(auto => {
                const fila = document.createElement('tr');
                fila.innerHTML = nuevaFila(auto);
                cuerpoDeTabla.appendChild(fila);
            })

}

const nuevaFila = autoData => {
    return `
    <td>${autoData.id}</td>
    <td><img class="imglistado" src="${URL}${autoData.foto}" alt="Imagen de ${autoData.foto}"></td>
    <td>${autoData.nombre}</td>
    <td>${autoData.descripcion}</td>
    <td>${autoData.anio}</td>
    <td>${autoData.kilometraje}</td>
    <td>$ ${autoData.precio}</td>
    <td>
        <a href="#editAutoModal" class="edit" data-bs-toggle="modal" data-bs-auto-id=${autoData.id}><i class="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i></a>
        <a href="#deleteAutoModal" class="delete" data-bs-toggle="modal" data-bs-auto-id=${autoData.id}><i class="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a>
    </td>
    `
}
function obtenerTodosLosAutos(){
    fetch(`${URL}/autos`)
        .then(response => response.json())
        .then(data => cargarAutos(data))
}
/*
fetch(`${URL}/autos`)
        .then(response => response.json())
        .then(data => cargarAutos(data))*/
