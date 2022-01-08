const App = () => {
  return (
    <div>
      <form>
        {/*<label for="name">Escribe un nombre:</label>*/}
        {/*La console nos da error: Invalid DOM property `for`. Did you mean `htmlFor`?*/}
        <label htmlFor="name">Escribe un nombre:</label>
        <input type="name" name="name" id="name" placeholder="María García" />
      </form>
    </div>
  );
};

export default App;
