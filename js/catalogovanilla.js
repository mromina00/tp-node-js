const catDeAutos = document.getElementById("catalogoDeAutos")
const anioMinimo = document.getElementById("anioMin")
console.log(anioMinimo)
const anioMaximo = document.getElementById("anioMax")
console.log(anioMaximo)
const precioMinimo = document.getElementById("precioMin")
console.log(precioMinimo)
const precioMaximo = document.getElementById("precioMax")
console.log(precioMaximo)

/*
 <article class="producto">
        <section class="imagen">
            <img src="../img/ram1500.jpg" alt="ram1500">
        </section>  
        <section class="descripcion">
            <h2>Ram 1500</h2>
            <p>Laramie 5.7 4x4 C/D</p>
            <p>2014 - 104.000 KM</p>
            <p class="precio">$35.900.000</p>
        </section>
 </article>
<br>
*/

function mostrarAutos(listaJason){
    catDeAutos.innerHTML = ""
    for (let i = 0; i < listaJason.length; i++){
        const lista =listaJason[i];

        const articulo = document.createElement('article');
        articulo.className = "producto";
        const imagenSection = document.createElement('section');
        imagenSection.className = "imagen";
        const descripcionSection = document.createElement('section');
        descripcionSection.className = "descripcion";
        const salto = document.createElement('br')
                

        const imagen = document.createElement('img');
        imagen.setAttribute('src', `../img/${lista.foto}`);
        imagen.innerHTML = lista.foto;
        const nombre = document.createElement('h2');
        nombre.innerHTML = lista.nombre;
        const descripcion = document.createElement('p');
        descripcion.innerHTML = lista.descripcion;
        const anioKilometraje = document.createElement('P')
        anioKilometraje.innerHTML = `${lista.anio} - ${lista.kilometraje} KM`;
        const precio = document.createElement('p');
        precio.className = "precio";
        precio.innerHTML = `$ ${lista.precio}`;
        
        imagenSection.appendChild(imagen);

        descripcionSection.appendChild(nombre);
        descripcionSection.appendChild(descripcion);
        descripcionSection.appendChild(anioKilometraje)
        descripcionSection.appendChild(precio);

        articulo.appendChild(imagenSection);
        articulo.appendChild(descripcionSection);
                        

        catDeAutos.appendChild(articulo);
        catDeAutos.appendChild(salto)

    }
}

function filtrar(amin, amax, pmin, pmax){
    const filtrados = listaDeAutosJSON.filter(art => art.anio >= amin && art.anio <= amax && art.precio >= pmin && art.precio <= pmax);
    mostrarAutos(filtrados)
}
function reset(){
    anioMinimo.value=2000;
    anioMaximo.value=2024;
    precioMinimo.value=0;
    precioMaximo.value=100000000;
    mostrarAutos(listaDeAutosJSON)
}

mostrarAutos(listaDeAutosJSON)
