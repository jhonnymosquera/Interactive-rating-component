
const btns = document.querySelectorAll('.card__content--li');
btns.forEach(btns => btns.addEventListener('click', btnGris));

const submit = document.querySelector('.btn');
const puntaje = document.querySelector('.puntaje');
const pregunta = document.querySelector('.pregunta');
const respuesta = document.querySelector('.respuesta');
const alert = document.querySelector('.alert');
submit.addEventListener('click', btnSubmit);

const pText = document.createElement('P');
let calificacion = 0;

function btnGris(event) {
	btns.forEach(btn => btn.classList.remove('fondo-gris'));

	const btnEvent = event.target;
	btnEvent.classList.add('fondo-gris');
	calificacion = parseInt(btnEvent.textContent);
}

function mensaje(text) {
	pText.classList.add('mensaje');
	pText.textContent = text;
}

function btnSubmit(event) {
	event.preventDefault();

	if (calificacion === 0) {
		mensaje('Please select an answer :)');
		alert.appendChild(pText);
		return;
	}

	mensaje(`You selected ${calificacion} out of ${btns.length}`);
	puntaje.appendChild(pText);

	pregunta.classList.add('oculto');
	respuesta.classList.remove('oculto');
}
