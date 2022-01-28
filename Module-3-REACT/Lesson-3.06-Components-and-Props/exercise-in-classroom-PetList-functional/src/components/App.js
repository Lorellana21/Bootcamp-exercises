import '../stylesheets/App.scss';
import data from '../data/mascotas.json';
import PetList from './PetList';
import Header from './Header';

/**
 * App es el componente mamá/abuela. Es el que está más arriba en la jerarquía de componentes.
 * App casi nunca tiene o usa props.
 * 
 * @returns JSX con la composición de toda la página web
 * (JSX es como se le llama al HTML con {javascript} interpolado que se usa en React)
 */

function App() {
  return (
    <div className="App">
      <Header text="Hola chicas"></Header>
      <main>
        <PetList data={data}></PetList>
      </main>
    </div>
  );
}

export default App;
