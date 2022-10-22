function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('activar');
    navigation.classList.toggle('activar');
}

function ocultarIFrame(){
    let padre = document.getElementById("divIframe");
    let cross = document.querySelector('.iframeDiv');
    padre.removeChild(cross);
    document.querySelector('#divIframe').classList.toggle('iframeVisible');
    
    //Hace un scroll hasta el inicio del Modal
    let coords = document.querySelector('#atendiendo').getBoundingClientRect();
    window.scroll(0, coords.top + scrollY);
}