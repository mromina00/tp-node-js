
const inputIDAutoAModificar = document.getElementById("inputIDAutoAModificar")

document.getElementById("editAutoModal").addEventListener('show.bs.modal', evt => {
    const autoId = evt.relatedTarget.getAttribute('data-bs-auto-id');
    inputIDAutoAModificar.value = autoId;
});

const editFoto = document.getElementById("inputFotoAutoEdit");
const editNombre = document.getElementById("inputNombreAutoEdit");
const editDescripcion = document.getElementById("inputDescripcionAutoEdit");
const editAnio = document.getElementById("inputAnioAutoEdit");
const editKilometraje = document.getElementById("inputKilometrajeAutoEdit");
const editPrecio = document.getElementById("inputPrecioAutoEdit");


const modificarAuto = async (evt) => {
    evt.preventDefault();
    try {
        const formData = new FormData();
        formData.append("id", inputIDAutoAModificar.value);
        formData.append("foto", editFoto.files[0]);
        formData.append("nombre", editNombre.value);
        formData.append("descripcion", editDescripcion.value);
        formData.append("anio", editAnio.value);
        formData.append("kilometraje", editKilometraje.value);
        formData.append("precio", editPrecio.value);
        
        const id = inputIDAutoAModificar.value;
        const opcionesFetch = {
                        method: 'PUT',
            body: formData
        }
        const resp = await fetch(`${URL}/autos/modificar/${id}`, opcionesFetch);
        if (resp.ok) {
            alert("Auto actualizado exitosamente");
            editFoto.value = "";
            editNombre.value = "";
            editDescripcion.value ="";
            editAnio.value ="";
            editKilometraje.value ="";
            editPrecio.value ="";

            ocultarModal('editAutoModal');
            obtenerTodosLosAutos();
        }
        else {
            throw new Error('Error al agregar el auto.');
        }
    } catch(err) {
        console.error(err);
    }
}

