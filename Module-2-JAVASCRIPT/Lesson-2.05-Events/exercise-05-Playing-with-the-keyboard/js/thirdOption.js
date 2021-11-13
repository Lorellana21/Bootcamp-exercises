
const bodyElement = document.querySelector('.body');

function handleBodyBackground(ev) {
  const pressedKey = ev.key.toLowerCase();
  bodyElement.classList.remove('red', 'purple');
  if (pressedKey === 'r') {
    bodyElement.classList.add('red');
  } else {
    bodyElement.classList.add('purple');
  }
}

bodyElement.addEventListener('keyup', handleBodyBackground);