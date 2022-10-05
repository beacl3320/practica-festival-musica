document.addEventListener('DOMContentLoaded', function(){
    iniciaiApp();
});

function iniciaiApp() {
    crearGaleria();
};

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <img src="/assets/img/grande/${i}.jpg" alt="imagen artista festival"></img>
        `;

        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
        
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <img src="/assets/img/grande/${id}.jpg" alt="imagen artista festival"></img>
        `;

    //crear el overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() { //funcion para cerrar el modal desde cualquier parte de la pantalla
        const body = document.querySelector('body');
        body.classList.remove('cerrar-modal');
        overlay.remove();
    }

    //Boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        overlay.remove();
    }

    overlay.appendChild(cerrarModal);

    //añadirlo al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
}