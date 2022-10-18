import {getCollection, alta} from './firebase.js';
import * as acciones from './acciones.js';

const formOp = document.querySelector('form'); 

window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getCollection('comentarios');
    
    querySnapshot.forEach(element => {
        console.log(element.data());
    });
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

