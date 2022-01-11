import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleTranslator = (ev) => {
    setText(ev.target.value);
    //console.log(ev.target.value);
  };

  const convertToIs = () => {
    //nunca podemos pasar una variable de estado como paramtetro
    //tampoco pocemos aplicarle una modificación. si queremos hacerlo tendremos que guardarla en una variable
    const inputValue = text;
    return inputValue.replace(/[aeou]/gi, "i");
  };
  return (
    <div>
      <form action="/action_page.php">
        <label htmlFor="textarea">Translator MIMIMI:</label>
        <br></br>
        <textarea
          name="textarea"
          id="textarea"
          value={text}
          rows="10"
          cols="50"
          onChange={handleTranslator}
        ></textarea>
      </form>
      <p>{convertToIs()}</p>
    </div>
  );
};

export default App;
