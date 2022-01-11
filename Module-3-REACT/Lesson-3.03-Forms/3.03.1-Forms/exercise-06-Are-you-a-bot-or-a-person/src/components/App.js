import { useState } from "react";

const App = () => {
  const [ingredients, setIngredients] = useState("potatoes", "eggs", "onion");
  const [text, setText] = useState("");

  const handleIngredients = (ev) => {
    setIngredients(ev.target.id);
    //console.log(ev.target.id);
    if (ingredients === ("potatoes" || "eggs" || "onion")) {
      setText("Eres un robot sin paladar");
    } else {
      setText("Eres una persona concebollista");
    }
  };
  return (
    <div>
      <form action="" onChange={handleIngredients}>
        <label htmlFor="omelette">
          Selecciona los ingredientes de la tortilla de patatas
        </label>
        <br></br>
        <label htmlFor="macaroni">
          <input id="macaroni" type="checkbox" name="macaroni" />
          <p>Macarrones</p>
        </label>
        <label htmlFor="potatoes">
          <input id="potatoes" type="checkbox" name="potatoes" />
          <p>Patatas</p>
        </label>
        <label htmlFor="nuts">
          <input id="nuts" type="checkbox" value="nuts" name="nuts" />
          <p>Nueces</p>
        </label>
        <label htmlFor="eggs">
          <input id="eggs" type="checkbox" value="eggs" name="eggs" />
          <p>Huevos</p>
        </label>
        <label htmlFor="onion">
          <input id="onion" type="checkbox" value="onion" name="onion" />
          <p>Cebolla</p>
        </label>
        <label htmlFor="beer">
          <input id="beer" type="checkbox" value="beer" name="beer" />
          <p>Cerveza</p>
        </label>
      </form>
      <p>
        {text}
        {/*{ingredients === "patatas" ||
        ingredients === "huevos" ||
        ingredients === "cebolla"
          ? "Eres una persona concebollista"
  : "Eres un robot sin paladar"}*/}
      </p>
    </div>
  );
};

export default App;
