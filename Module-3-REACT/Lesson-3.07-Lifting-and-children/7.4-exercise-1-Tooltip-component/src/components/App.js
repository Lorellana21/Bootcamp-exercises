

import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <h1>Practicando con tooltips y children</h1>

      <p>
        Blanditiis illo fantur aliquam a!
      </p>
      <Tooltip>
        <h4>Este es el título de la ayuda</h4>
        <p>Y esta es la descripción de la ayuda.</p>
      </Tooltip>

      <p>
        Quam eligendi, ut rem eos, quae ab maxime ea quia repudiandae cumque? Ducimus iste amet
        beatae ipsa ab!
      </p>
      <Tooltip>
        <p>Esta ayuda no tiene título, solo descripción.</p>
      </Tooltip>
    </div>
  );
};

export default App;
