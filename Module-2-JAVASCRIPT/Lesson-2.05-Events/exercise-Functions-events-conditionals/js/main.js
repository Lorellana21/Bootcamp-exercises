'use strict';

const inputElement = document.querySelector('.js-input');
const submitElement = document.querySelector('.js-submit');
const resultElement = document.querySelector('.js-result');

function hasWriteDelete() {
  const inputValue = inputElement.value;
  if (inputValue === 'BORRAR') {
    return true;
  } else {
    return false;
  }
}

// Flujo 1:
// - Cuando la usuaria escribe >>> comprobar si ha escrito BORRAR:
//   - Sí: activo el botón
//   - No: desactivo

function handleInput() {
  if (hasWriteDelete()) {
    submitElement.classList.add('active');
  } else {
    submitElement.classList.remove('active');
  }
}

inputElement.addEventListener('keyup', handleInput);

// Flujo 2:
// - Cuando la usuaria hace click >>> comprobar si ha escrito BORRAR:
//   - Sí: Borro
//   - No: Nada

function handleSubmit(ev) {
  ev.preventDefault();
  if (hasWriteDelete()) {
    console.log('Borrando...');
    resultElement.innerHTML = 'Elemento borrado';
  } else {
    console.log('Nada');
  }
}

submitElement.addEventListener('click', handleSubmit);
