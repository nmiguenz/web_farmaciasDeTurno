import {getCollection, alta} from './firebase.js';
import { validarFormulario, campos, validarCheck} from './funciones.js';

//Constantes
const farmaciaCardContainer = document.getElementById('flipCardContainer');  
const divIframe = document.getElementById('divIframe');
const altaCard = document.getElementById('alta');
const formularioAlta = document.querySelector('form');
const inputsComent = document.querySelectorAll('.formDiv input');

//Comportamiento del NAVBAR al hacer scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("move", window.scrollY > 0);
});
 
//Carga de las CARDS con las farmacias de turno
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
                        <h3><i class="fa-solid fa-location-dot"></i> <span>Dirección:</span> ${farmacia.direccion + ' ' + farmacia.numero + ', ' + farmacia.localidad} </h3>
                    </div>
                    <p><i class="fa-solid fa-phone"></i> <span>Teléfono:</span> ${farmacia.telefono}</p>
                    <button id="btnUbicacion" data-id='${farmacia.mapa}'>VER UBICACION</button>
                </div>
            </div>
        </div>`

    });
    farmaciaCardContainer.innerHTML = html;

    const btnUbicacion = farmaciaCardContainer.querySelectorAll("#btnUbicacion");
    
    btnUbicacion.forEach(btn =>{
        btn.addEventListener('click', (e) => {
            const frame = e.target.dataset.id;

            divIframe.innerHTML = ` <div class="iframeDiv">
                                        <i class="fa-sharp fa-solid fa-x" onclick="ocultarIFrame()"></i>
                                        ${frame}
                                    </div>`;
            
            document.querySelector('#divIframe').classList.toggle('iframeVisible'); //Activa/desactiav el Iframe en una especie de modal

            //Hace un scroll hasta el inicio del Modal
            let coords = document.querySelector('#divIframe').getBoundingClientRect();
            window.scroll(0, coords.top + scrollY);
        });
    });
});

//Se agrega addEventListener a los INPUTS 
inputsComent.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario) //Evento que controla cuando se suelta una tecla
    input.addEventListener('blur', validarFormulario) //Evento que controla cuando se presiona fuera del elemento
});

//SUBMIT de un nuevo comentario
window.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const deTurno = validarCheck();

    if(campos.nombre && campos.direccion && campos.numero &&
        campos.localidad && campos.telefono && campos.mapa && campos.check){
      
        const farmacia = {
            nombre: formularioAlta['nombre'].value,
            direccion: formularioAlta['direccion'].value,
            numero: formularioAlta['numero'].value,
            localidad: formularioAlta['localidad'].value,
            telefono: formularioAlta['telefono'].value,
            mapa: formularioAlta['mapa'].value,
            deTurno : deTurno
        };

        // ALTA de una farmacia
        await alta('farmacias', farmacia)
        .then( (resp) => {
            //Si fue un éxito el alta, reseteo del formulario
            if(resp.id){
                formularioAlta.reset();
                document.querySelectorAll('.iconInput').forEach((icono) => {icono.classList.remove('fa-circle-check');});
                document.querySelectorAll('input').forEach((input) => {input.classList.remove('input-correcto');});
                document.querySelectorAll('textarea').forEach((input) => {input.classList.remove('input-correcto');});
                document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
                setTimeout(() => {
                    document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
                }, 2500);
            }
        });
    }
    else{
        document.getElementById('formComentario-msg').classList.add('formComentario-msg-active')
    }
});