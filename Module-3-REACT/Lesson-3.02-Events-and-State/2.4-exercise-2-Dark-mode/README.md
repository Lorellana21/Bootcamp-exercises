# Dark mode

Ahora vamos a programar la típica funcionalidad del dark mode. Para ello:

1. Crea un proyecto con los siguientes contenidos:

- Un **botón** con el texto "Des / activar el dark mode".
- Un **párrafo** con el texto "Tienes activado el dark mode".
- Un texto cualquiera de relleno con lorem ipsum.

2. Añade la funcionalidad para que toda la página funcione correctamente. Cada vez que la usuaria pulse en el botón "Des / activar el dark mode" debes:

- Invertir el valor de una constante del estado de React.
- Repintar la página añadiendo una clase CSS en el `<div />` principal del componente:
  - Añade estilos en tu CSS / Sass que cambien los colores de la página.
  - Si quieres puedes utilizar los estilos [filter](<https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert()>) para invertir los colores de la página.
- Repintar el párrafo "Tienes activado el dark mode" para que des / aparezca:
  - Crea una función que se llame `renderDarkModeText()`.
  - Esta función debe comprobar el valor del estado de React.
  - Esta función debe retornar un párrafo en JSX si el dark mode está activo.
  - Esta función debe retornar un `null` si el dark mode no está activo.
  - Debes llamar a esta función desde el retorno de tu componente.

---

# Dark mode

1. Create a project with the following contents:

- A **button** with the text "Dis / activate the dark mode".
- A **paragraph** with the text "You have activated the dark mode".
- Any filler text with lorem ipsum.

2. Add the functionality for the whole page to work correctly. Each time the user clicks on the "Dis / activate the dark mode" button, you must:

- Invert the value of a React state constant.
- Repaint the page by adding a CSS class in the `<div />` of the component:
  - Add styles in your CSS / Sass that change the colours of the page.
  - If you want you can use [filter](<https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert()>) styles to invert the colours of the page.
- Repaint the paragraph "You have activated the dark mode" for it to dis / appear.
  - Create a function called `renderDarkModeText()`.
  - This function shall check the value of the React state.
  - This function shall return a paragraph in JSX if dark mode is active.
  - This function must return a `null` if dark mode is not active.
  - You must call this function from the return of your component.
