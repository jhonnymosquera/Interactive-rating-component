// Pregunta

const cardPreguntaUl = document.querySelector('.card__content--ul');
const list = cardPreguntaUl.children;

const btn1 = list[0].addEventListener('click', btnGris);
const btn2 = list[1].addEventListener('click', btnGris);
const btn3 = list[2].addEventListener('click', btnGris);
const btn4 = list[3].addEventListener('click', btnGris);
const btn5 = list[4].addEventListener('click', btnGris);

let calificacion = 0;

function btnGris(event){

    for(let i = 0 ; i < list.length; i++){
        list[i].classList.remove('fondo-gris');
    };

    const btn = event.target;
    btn.classList.add('fondo-gris');

    calificacion = parseInt(btn.textContent);
}

// Respuesta

const submit = document.querySelector('.btn');
const puntaje = document.querySelector('.puntaje');
const pregunta = document.querySelector('.pregunta');
const respuesta = document.querySelector('.respuesta');
const alert = document.querySelector('.alert');

const pText = document.createElement('P');

function mensaje(text){
    pText.classList.add('mensaje') ;
    pText.textContent = text ;
};

submit.addEventListener('click', btnSubmit);

function btnSubmit(event){
    event.preventDefault();
    
    if(calificacion === 0){
        
        mensaje('Please select an answer :)');
        alert.appendChild(pText);
        
        return
    };
    
    mensaje(`You selected ${calificacion} out of ${list.length}`);
    puntaje.appendChild(pText);

    pregunta.classList.add('oculto');
    respuesta.classList.remove('oculto');
};