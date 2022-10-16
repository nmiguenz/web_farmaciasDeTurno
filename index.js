window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("move", window.scrollY > 0);
})

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