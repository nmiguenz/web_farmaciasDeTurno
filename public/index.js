import {getCollection, alta} from './firebase.js';

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

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('activar');
    navigation.classList.toggle('activar');
}

function redirect(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    if(navigation.classList.value == 'navigation activar'){
        menuToggle.classList.toggle('activar');
        navigation.classList.toggle('activar');
    }

}