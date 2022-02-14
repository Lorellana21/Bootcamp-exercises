


import { useRef } from 'react';

const App = () => {
  // Creamos una referencia a un etiqueta HTML y la llamamos inputEl
  const inputEl = useRef();

  const handleButton = () => {
    // current apunta a la etiqueta input
    inputEl.current.focus();
  };

  return (
    <div>
      {/* Asociamos esta etiqueta input a la referencia que hemos creado arriba inputEl*/}
      <input ref={inputEl} type="text" />
      <button onClick={handleButton}>Poner el foco en el input</button>
    </div>
  );
};

export default App;
