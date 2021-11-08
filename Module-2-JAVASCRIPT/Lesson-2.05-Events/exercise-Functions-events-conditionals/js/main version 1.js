'use strict';

const inputElement = document.querySelector('.js-input');
const submitElement = document.querySelector('.js-submit');

// Flujo 1:
// - Cuando la usuaria escribe >>> comprobar si ha escrito BORRAR:
//   - Sí: activo el botón
//   - No: desactivo

function handleInput() {
  const inputValue = inputElement.value;
  if (inputValue === 'BORRAR') {
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
  const inputValue = inputElement.value;
  if (inputValue === 'BORRAR') {
    console.log('Borrando...');
  } else {
    console.log('Nada');
  }
}

submitElement.addEventListener('click', handleSubmit);
