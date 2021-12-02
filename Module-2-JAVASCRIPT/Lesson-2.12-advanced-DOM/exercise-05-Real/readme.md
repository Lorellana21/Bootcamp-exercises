## Anclas de verdad

Vamos a partir del ejercicio 11 de la sesión 2.5, donde aprendimos a eliminar el comportamiento por defecto del enlace. En este ejercicio vamos a terminar lo que empezamos, y podremos hacer scroll hasta cada sección usando enlaces desde JS.

Para ello seguimos estos pasos:

1. Ponemos un atributo `data-id` a los enlaces para indicar a qué elemento debemos hacer scroll
1. Al hacer click, eliminamos el comportamiento por defecto.
1. Con [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) buscamos la posición del elemento en la página.
1. Usando ][window.scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) hacemos scroll hasta el elemento pero restando alguno píxeles para que la cabecera fija no lo tape.

---

## Real anchors

Let's build on exercise 11 from session 2.5, where we learned how to remove the default link behaviour. In this exercise we're going to finish what we started, and we'll be able to scroll to each section using links from JS.

To do this we follow these steps:

1. We put a `data-id` attribute to the links to indicate which element to scroll to.
1. When clicked, we remove the default behaviour.
1. Using [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) we find the position of the element on the page.
1. Using [window.scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) we scroll to the element but subtract some pixels so that the fixed header doesn't cover it.
