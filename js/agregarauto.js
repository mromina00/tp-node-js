const inputFoto = document.getElementById("inputFotoAutoAdd");
const inputNombre = document.getElementById("inputNombreAutoAdd");
const inputDescripcion = document.getElementById("inputDescripcionAutoAdd");
const inputAnio = document.getElementById("inputAnioAutoAdd");
const inputKilometraje = document.getElementById("inputKilometrajeAutoAdd");
const inputPrecio = document.getElementById("inputPrecioAutoAdd");

const agregarAuto = async (evt) => {
    evt.preventDefault();
    try {
        const formData = new FormData();
        
        formData.append("foto", inputFoto.files[0]);
        formData.append("nombre", inputNombre.value);
        formData.append("descripcion", inputDescripcion.value);
        formData.append("anio", inputAnio.value);
        formData.append("kilometraje", inputKilometraje.value);
        formData.append("precio", inputPrecio.value);
        
        
        const opcionesFetch = {
            method: 'POST',
            body: formData
        }
        const resp = await fetch(`${URL}/autos/alta`, opcionesFetch);
        if (resp.ok) {
            alert("Auto agregado exitosamente");
            inputFoto.value = "";
            inputNombre.value = "";
            inputDescripcion.value ="";
            inputAnio.value ="";
            inputKilometraje.value ="";
            inputPrecio.value ="";

            ocultarModal('addAutoModal');
            obtenerTodosLosAutos();
        }
        else {
            throw new Error('Error al agregar el auto.');
        }
    } catch(err) {
        console.error(err);
    }
}

