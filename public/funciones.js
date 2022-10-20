export function validaNombre(e, campo){
    if (campo == 0) {      
        alert("Completa el campo nombre");
        e.preventDefault();
        return false;
    }
    else    
        return true;
};

export function validarEmail(e, campo) {

    var filter = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;

    if (!filter.test(campo)) {
        alert('El email no tiene un formato válido');
        e.preventDefault();
        return false;
    }
    else 
        return true;
}

export function validarComentario(e, campo) {

    if(campo.length < 140){
        alert('Vamos, no podés escribir menos que un tuit (140 caracteres).');
        return false
    }
    else if(campo.length > 300){
        alert('Entendemos que nos aprecies, pero el comentario es muy largo para publicar (más de 300 caracteres).');
        return false
    }
    else
        return true;
}

// export function mostrarIframe(){
//     // elemento.innerHtml = mapa;
//     console.log('hola')
// }