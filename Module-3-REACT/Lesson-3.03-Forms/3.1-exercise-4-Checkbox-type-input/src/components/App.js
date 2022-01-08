import { useState } from "react";

const App = () => {
  // Creamos la constante de estado giftWrap con el valor inicial a booleano
  // Al iniciar suponemos que la clienta no quiere envolver el producto para regalo, por eso ponemos false
  const [giftWrap, setGiftWrap] = useState(false);

  // Creamos la función manejadora
  const handleGiftWrap = (ev) => {
    // En la que guardamos no el valor del input sino su propiedad checked, en giftWrap con setGiftWrap
    setGiftWrap(ev.target.checked);
    //console.log(ev.target.checked);
  };

  return (
    <div>
      <form>
        <label htmlFor="giftWrap">
          ¿Quieres envolver para regalo tu compra?
        </label>

        {/* Creamos un evento de tipo change en este input que va a ser manejada por handleGiftWrap */}
        <input
          type="checkbox"
          name="gitWrap"
          id="gitWrap"
          onChange={handleGiftWrap}
        />

        {/* Usamos la constante giftWrap para pintarla en el HTML */}
        <p>{giftWrap === true ? "Sí" : "No"} te lo envolveremos para regalo</p>
      </form>
    </div>
  );
};

export default App;
