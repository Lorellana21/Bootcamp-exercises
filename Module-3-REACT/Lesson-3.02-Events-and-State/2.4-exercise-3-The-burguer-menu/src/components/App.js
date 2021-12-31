import '../styles/App.css';

function App() {
  const handleInput = (ev) => {
    ev.preventDefault();
    console.log('La última tecla pulsada es: ', ev.key);
    console.log('El valor del input es: ', ev.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Write down your favourite movie: </label>
     <input type="text" id="name" name="movie" onKeyUp={handleInput} 
     />
    </div>
  );
}

export default App;
