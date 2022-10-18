import {getCollection, alta} from './firebase.js';

const formOp = document.querySelector('form');
const farmaciaCard = document.getElementById('flipCardContainer');  

window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getCollection('farmacias');

    let html = ''
    
    querySnapshot.forEach(element => {
        let farmacia = element.data();

        html += `<!-- modelo 2 -->
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h2>${farmacia.nombre}</h2>
                </div>
                <div class="flip-card-back">
                    <div>
                        <h2><span>Dirección:</span> ${farmacia.direccion + ' ' + farmacia.numero + ', ' + farmacia.localidad} </h2>
                    </div>
                    <p><span>Teléfono:</span> ${farmacia.telefono}</p>
                    <button onclick="mostrarIframe()">VER UBICACION</button>
                </div>
            </div>
        </div>`
    });

    farmaciaCard.innerHTML = html;
});

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("move", window.scrollY > 0);
});

// Alta de comentarios
window.addEventListener('submit', (e)=>{
    e.preventDefault();

    const opinion = {
        nombre: formOp['nombre'].value,
        apellido: formOp['email'].value,
        comentario: formOp['comentario'].value
    };

    alta('comentarios', opinion);
});