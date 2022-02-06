

import ModalWindow from './ModalWindow';

const App = () => {
  return (
    <div>
      <h1>Jugando con ventanas modales</h1>
      {/* Entre las etiquetas de apertura y cierre del componente ModalWindow hemos metido un h1: */}
      <ModalWindow>
        <h1>Contenido de una ventana modal</h1>
      </ModalWindow>
    </div>
  );
};

export default App;
