const inputIDAutoABorrar = document.getElementById("inputIDAutoABorrar")

document.getElementById("deleteAutoModal").addEventListener('show.bs.modal', evt => {
    const autoId = evt.relatedTarget.getAttribute('data-bs-auto-id');
    inputIDAutoABorrar.value = autoId;
});

const borrarAuto = async (evt) => {
    evt.preventDefault();
    try {
        const id = inputIDAutoABorrar.value;
        const opcionesFetch = {
            method: 'DELETE'
        }
        const resp = await fetch(`${URL}/autos/${id}`, opcionesFetch);
        if (resp.ok) {
            alert("Auto borrado exitosamente");
            ocultarModal('deleteAutoModal');
            await obtenerTodosLosAutos();
        }
        else {
            throw new Error('Error al borrar el auto.');
        }
    } catch(err) {
        console.error(err);
    }
}