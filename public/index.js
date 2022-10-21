import {getCollection, alta, onGetCollection} from './firebase.js';
import {validaNombre, validarComentario, validarEmail} from './funciones.js';

const formOp = document.querySelector('form');
const farmaciaCard = document.getElementById('flipCardContainer');  
const divIframe = document.getElementById('iframeDiv'); 

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("move", window.scrollY > 0);
});

window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getCollection('farmacias');

    let html = ''
    
    querySnapshot.forEach(element => {
        let farmacia = element.data();
        let i = 0;

        html += `<!-- modelo 2 -->
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h2>${farmacia.nombre}</h2>
                </div>
                <div class="flip-card-back">
                    <div>
                        <h3><i class="fa-solid fa-location-dot"></i> <span>Dirección:</span> ${farmacia.direccion + ' ' + farmacia.numero + ', ' + farmacia.localidad} </h3>
                    </div>
                    <p><i class="fa-solid fa-phone"></i> <span>Teléfono:</span> ${farmacia.telefono}</p>
                    <button id="btnUbicacion${i}">VER UBICACION</button>
                </div>
            </div>
        </div>`

        // var elementoBtn = 'btnUbicacion'+i;
        // if(html !== ''){
        //     document.getElementById(elementoBtn).addEventListener('click', (farmacia) => {
        //         document.getElementById(divIframe).innerHTML = `<div class="iframeDiv">
        //         <i class="fa-sharp fa-solid fa-x" onclick="ocultarIFrame()"></i>
        //         ${farmacia.mapa}
        //     </div>`
        //     })
        // };

        i++;
    });

    farmaciaCard.innerHTML = html;
});

// cargo las opiniones
const opinionCard = document.getElementById('opinar');  

window.addEventListener('DOMContentLoaded', async () => {

    onGetCollection('comentarios', (querySnapshot2) => {

        let html = ''
        
        querySnapshot2.forEach(element => {
            let opinar = element.data();
    
            html += `<!-- modelo 3 -->
            <div class="box">
                <div class="imgBx">
                    <img src="assets/testi2.jpg" alt="">
                </div>
                <div class="text">
                    <p>${opinar.comentario}</p>
                    <h3>${opinar.nombre}</h3>
                </div>
            </div>`
        });
    
        opinionCard.innerHTML = html;

    })
    // const querySnapshot2 = await getCollection('comentarios');

});


// Alta de comentarios
window.addEventListener('submit', async (e)=>{
    e.preventDefault();
    
    const opinion = {
        nombre: formOp['nombre'].value,
        apellido: formOp['email'].value,
        comentario: formOp['comentario'].value
    };

    if ( validaNombre(e, opinion.nombre) && 
            validarEmail(e, opinion.apellido) &&
            validarComentario(e, opinion.comentario))
    {
        await alta('comentarios', opinion)
        .then( (resp) => {if(resp.id) formOp.reset()})
    }

});