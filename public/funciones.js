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


// Agrego nuevas funcionalidades
// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('form input');

// const expresiones = {
// 	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	// password: /^.{4,12}$/, // 4 a 12 digitos.
// 	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	// telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }

// const campos = {
// 	usuario: false,
// 	nombre: false,
// 	password: false,
// 	correo: false,
// 	telefono: false
// }

// const validarFormulario = (e) => {
// 	switch (e.target.name) {
// 		// case "usuario":
// 		// 	validarCampo(expresiones.usuario, e.target, 'usuario');
// 		// break;
// 		case "nombre":
// 			validarCampo(expresiones.nombre, e.target, 'nombre');
// 		break;
// 		// case "password":
// 		// 	validarCampo(expresiones.password, e.target, 'password');
// 		// 	validarPassword2();
// 		// break;
// 		// case "password2":
// 		// 	validarPassword2();
// 		// break;
// 		case "email":
// 			validarCampo(expresiones.correo, e.target, 'correo');
// 		break;
// 		// case "telefono":
// 		// 	validarCampo(expresiones.telefono, e.target, 'telefono');
// 		// break;
// 	}
// }

// const validarCampo = (expresion, input, campo) => {
// 	if(expresion.test(input.value)){
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		campos[campo] = true;
// 	} else {
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		campos[campo] = false;
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);
// 	input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const terminos = document.getElementById('terminos');
// 	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
// 		formulario.reset();

// 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		}, 5000);

// 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('formulario__grupo-correcto');
// 		});
// 	} else {
// 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
// 	}
// });