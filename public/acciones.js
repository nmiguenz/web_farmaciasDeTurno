function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('activar');
    navigation.classList.toggle('activar');
}

const redirect = () =>{
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    if(navigation.classList.value == 'navigation activar'){
        menuToggle.classList.toggle('activar');
        navigation.classList.toggle('activar');
    }

}

function mostrarIFrame(position){
    let valor = ''+position;
    const iFrame = document.querySelector(valor);
    navigation.classList.toggle('activar');
}

function ocultarIFrame(){
    let padre = document.getElementById("divIframe");
    let cross = document.querySelector('.iframeDiv');
    padre.removeChild(cross);
    
}