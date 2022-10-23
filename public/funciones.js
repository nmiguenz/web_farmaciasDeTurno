// Agrego nuevas funcionalidades
//REGEX
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	direccion: /^[a-zA-ZÀ-ÿ.\s]{4,40}$/,
	localidad: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    comentario: /^[\w\W\d\s\n]{140,300}$/,
	telefono: /^\d{8,14}$/, // 7 a 14 numeros.
	numero: /^\d{1,5}$/, // 7 a 14 numeros.
	mapa: /^[<iframe src=\w\W\d]{400,600}$/
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	// password: /^.{4,12}$/, // 4 a 12 digitos.
}

//Set de los campos en FALSE
export const campos = {
	nombre: false,
	email: false,
    comentario: false,
	telefono: false,
	numero: false,
	mapa: false,
	check: false
}

export const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
		    validarCampo(expresiones.nombre, e.target, 'nombre');
		    break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
            break;
        case "comentario":
            validarCampo(expresiones.comentario, e.path[0], 'comentario')
            break;
		case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		    break;
		case "numero":
			validarCampo(expresiones.numero, e.target, 'numero');
			break;
		case "localidad":
			validarCampo(expresiones.localidad, e.target, 'localidad');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;
		case "mapa":
			validarCampo(expresiones.mapa, e.target, 'mapa');
			break;
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('input-incorrecto');
		document.getElementById(`${campo}`).classList.add('input-correcto');
		document.querySelector(`#inputBox_${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#inputBox_${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`.error_${campo}`).classList.remove('input_error_activo');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add('input-incorrecto');
		document.getElementById(`${campo}`).classList.remove('input-correcto');
        document.querySelector(`#inputBox_${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#inputBox_${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`.error_${campo}`).classList.add('input_error_activo');
		campos[campo] = false;
	}
}


export const validarCheck = () =>{
	let arrayTurnos = [];
	
	let inputsChk = document.querySelectorAll('.formulario_checkbox')
	inputsChk.forEach((dia) =>{
		if(dia.checked) arrayTurnos.push(dia.value)
	});
	
	if(arrayTurnos.length != 0 ){
		campos["check"] = true;
		return arrayTurnos;
	}
}