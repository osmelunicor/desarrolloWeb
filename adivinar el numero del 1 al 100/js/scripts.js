let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const intentos = document.querySelector('.intentos');
const ultResult = document.querySelector('.ultResult');
const nIntentos = document.querySelector('.nIntentos');
const masOMenos = document.querySelector('.masOMenos');
const btnAdivina = document.querySelector('.btnAdivina');
const txtNum = document.querySelector('.txtNum');

let cont = 1;
let nuevoJuego;
btnAdivina.addEventListener(`click`, verificar);

function verificar(){
    let intento = Number(txtNum.value);
    if(cont === 1){
        intentos.textContent = 'Intentos: ';
    }

    intentos.textContent = intentos.textContent + intento + ' ';
    nIntentos.textContent = 'Número de intentos: '+cont;

    if(intento === numeroAleatorio){
        ultResult.textContent = 'Haz adivinado el número';
        ultResult.style.backgroundColor = 'green';
        masOMenos.textContent = '';
        finJuego();
    }else if(cont === 10){
        ultResult.textContent = 'Perdiste, el número era ' + numeroAleatorio;
        masOMenos.textContent = '';
        finJuego();
    }else{
        ultResult.textContent = "Número incorrecto!"
        ultResult.style.backgroundColor = 'red';
        if(intento < numeroAleatorio){
            masOMenos.textContent = "Estás por debajo"
        }else if(intento > numeroAleatorio){
            masOMenos.textContent = "Te pasaste";
        }
    }

    cont++;
    txtNum.value = '';
    txtNum.focus();
}

function finJuego(){
    txtNum.disable = true;
    btnAdivina.disable = true;
    nuevoJuego = document.createElement('button');
    nuevoJuego.textContent = 'Jugar de nuevo';
    document.body.appendChild(nuevoJuego);
    nuevoJuego.addEventListener(`click`, reiniciciarJuego);
}

function reiniciciarJuego(){
    cont = 1;
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    ultResult.textContent = '';
    intentos.textContent = '';
    nIntentos.textContent = '';
    document.body.removeChild(nuevoJuego);
    ultResult.style.backgroundColor = 'white';
}