# Visualiza tu destino

Vamos a partir del ejercicio 2 sobre elegir tu destino. Vamos a crear un nuevo componente `CityImage` que muestra una imagen de una ciudad que recibe por props. Por ejemplo:

```
<CityImage city="Praga" />
```

Debe mostrar una imagen de Praga. Para facilitar este comportamiento, este componente debe tener como uno de sus atributos un objeto literal con el formato:

```
 {
2 'Praga': 'http://path-to-praga-image.jpg',
3 'Boston': 'http://path-to-boston-image.jpg',
4 ...
5 }
```

Una vez que tenemos este componente funcionando, vamos a crear uno como hija de nuestro componente `Destiny`, es decir, vamos a hacer que `Destiny` contenga un `CityImage` . Para eso vamos a pintarlo en el JSX de su `render`.

Para terminar, vamos hacer que la magia suceda: en vez de hacer un alert, cuando la usuaria elija una ciudad en el select aparece la imagen de esa ciudad y se muestra el texto 'Tu destino es viajar a XXX'. Para conseguirlo os recomendamos usar un atributo de la clase `this.city` que cambie su valor al cambiar el select. También tendremos que usar `forceUpdate` para que se ejecute el método `render` y
a) se pasen unas props diferentes al componente `CityImage` y
b) se pinte una ciudad diferente en el título.

---

# Visualise your destiny

Let's start from exercise 2 about choosing your destination. Let's create a new `CityImage` component that displays an image of a city that receives props. For example:

```
<CityImage city="Prague" />
```

It should display an image of Prague. To facilitate this behaviour, this component must have as one of its attributes an object literal with the format:

```
 {
2 'Prague': 'http://path-to-praga-image.jpg',
3 'Boston': 'http://path-to-boston-image.jpg',
4 ...
5 }
```

Once we have this component working, we are going to create one as a child of our `Destiny` component, that is, we are going to make `Destiny` contain a `CityImage` . For that we are going to paint it in the JSX of its `render`.

Finally, let's make the magic happen: instead of making an alert, when the user chooses a city in the select, the image of that city appears and the text 'Your destination is to travel to XXX' is displayed. To achieve this we recommend using an attribute of the `this.city` class that changes its value when the select is changed. We will also need to use `forceUpdate` so that the `render` method is executed and
a) pass a different props to the `CityImage` component and
b) paint a different city in the title.
