

//Importamos las funciones render y screen de la librería de testing para React para usarlas más abajo.
import { render, screen } from '@testing-library/react';


//Importando el componente que queremos testear.
import App from '../src/App';


//Declaramos un test.
test('renders "Hola mundo"', () => {
  // Arrange
  render(<App />);
  // Act
  const divElement = screen.getByText('Hola mundo');
  // Assert
  expect(divElement).toBeInTheDocument();
});
//Si queremos crear un segundo test para testear App.js podemos añadir otra línea similar como test('Este es otro test', () => { ... });.

//El texto renders "Hola mundo" es una descripción de lo que hace el test. Es útil solo para humanos (y no para ordenadores), ya que si el test falla la terminal nos dirá que ha fallado el test que tiene esta descripción.
//Con la función render(<App />); le estamos diciendo que nos renderice el componente App. Como ves, dentro de la función render podemos poner código JSX.
//Con la línea const divElement = screen.getByText('Hola mundo'); estamos buscando dentro de lo que App ha renderizado. Estamos buscando la etiqueta HTML que contiene el texto "Hola mundo". En la constante divElement se guarda una referencia a la etiqueta div. Es decir, screen.getByText es una especie de document.querySelector.
//Con la línea expect(divElement).toBeInTheDocument(); indicamos que esperamos que divElement esté presente en el documento.