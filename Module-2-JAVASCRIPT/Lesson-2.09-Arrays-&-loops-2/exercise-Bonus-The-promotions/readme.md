# Las promociones / The promotions

Os proponemos unos ejercicios super entrenidos para dominar las estructuras de datos complejas:

- Partiendo de los ficheros `index.html` y `main.js` de esta carpeta os pedimos que hagáis diferentes ejercicios.
- En todos ellos **os mostramos el código resultante** del ejercicio que deberíais generar y añadir con `innerHTML` en el div `<div class="js-result" />`.
- Deberíais añadir vuestro código a `main.js`.
- No es necesario que modifiquéis el fichero `index.html`.
- Para practicar podéis hacer todos los ejercicios con `for` clásico y luego cambiarlo a `for ... of` para entender la diferencia entre uno y otro.
- Tenemos un array de promociones, que son objetos, y dentro de cada promoción un array de alumnas, que oh, vaya, también es un array de objetos. A partir del ejercicio 4 vais a necesitar bucles anidados, es decir, un `for` dentro de otro `for`.

Cuando terminéis todos los ejercicios os aseguramos que no habrá estructura de datos que se os resista!!!

### 1 Pintar en pantalla los nombres de las promos

### 1 Paint the names of the promos on the screen

```html
<div class="js-result">
  <ul>
    <li>Ada</li>
    <li>Borg</li>
    <li>Clarke</li>
  </ul>
</div>
```

### 2 Pintar en pantalla las letras y los nombres de las promos

### 2 Paint the letters and the names of the promos on the screen.

```html
<div class="js-result">
  <ul>
    <li>
      <p>Nombre: Ada</p>
      <p>Promo: A</p>
    </li>
    <li>
      <p>Nombre: Borg</p>
      <p>Promo: B</p>
    </li>
    <li>
      <p>Nombre: Clarke</p>
      <p>Promo: C</p>
    </li>
  </ul>
</div>
```

### 3 Pintar en pantalla las letras de las promos, los nombres de las promos y el número de alumnas

### 3 Screen-painting the letters of the promos, the names of the promos and the number of students

```html
<div class="js-result">
  <ul>
    <li>
      <p>Nombre: Ada</p>
      <p>Promo: A</p>
      <p>Número de alumnas: 3</p>
    </li>
    <li>
      <p>Nombre: Borg</p>
      <p>Promo: B</p>
      <p>Número de alumnas: 3</p>
    </li>
    <li>
      <p>Nombre: Clarke</p>
      <p>Promo: C</p>
      <p>Número de alumnas: 3</p>
    </li>
  </ul>
</div>
```

### 4 Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas

### 4 Paint on the screen the names of the promos and the names and ages of the pupils.

```html
<div class="js-result">
  <ul>
    <li>
      <p>Nombre: Ada</p>
      <ul>
        <li>Sofía, 20</li>
        <li>María, 21</li>
        <li>Lucía, 22</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Borg</p>
      <ul>
        <li>Julia, 23</li>
        <li>Tania, 24</li>
        <li>Alaia, 25</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Clarke</p>
      <ul>
        <li>Lidia, 26</li>
        <li>Celia, 27</li>
        <li>Nadia, 28</li>
      </ul>
    </li>
  </ul>
</div>
```

### 5 Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas

### 5 Paint on the screen the names of the promos and the names, age and id of the pupils.

```html
<div class="js-result">
  <ul>
    <li>
      <p>Nombre: Ada</p>
      <ul>
        <li id="id-1">Sofía, 20</li>
        <li id="id-2">María, 21</li>
        <li id="id-3">Lucía, 22</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Borg</p>
      <ul>
        <li id="id-4">Julia, 23</li>
        <li id="id-5">Tania, 24</li>
        <li id="id-6">Alaia, 25</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Clarke</p>
      <ul>
        <li id="id-7">Lidia, 26</li>
        <li id="id-8">Celia, 27</li>
        <li id="id-9">Nadia, 28</li>
      </ul>
    </li>
  </ul>
</div>
```

### 6 Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas que tenga edad par

### 6 Paint on the screen the names of the promos and the names, age and id of the students who are of even age

```html
<div class="js-result">
  <ul>
    <li>
      <p>Nombre: Ada</p>
      <ul>
        <li id="id-1">Sofía, 20</li>
        <li id="id-3">Lucía, 22</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Borg</p>
      <ul>
        <li id="id-5">Tania, 24</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Clarke</p>
      <ul>
        <li id="id-7">Lidia, 26</li>
        <li id="id-9">Nadia, 28</li>
      </ul>
    </li>
  </ul>
</div>
```

### 7 Pintar en pantalla los nombres de las promos y los nombres la edad y el id de las alumnas que trabajan en Google

### 7 Paint on the screen the names of the promos and the names, age and id of the students working in Google

Para ello antes de pintar a una alumna tendréis que comprobar si su `id` está en `studentsWorkingInGoogle`.

```html
<div class="js-result">
  <ul>
    <li>
      <p>Nombre: Ada</p>
      <ul>
        <li id="id-2">María, 21</li>
        <li id="id-3">Lucía, 22</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Borg</p>
      <ul>
        <li id="id-5">Tania, 24</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Clarke</p>
      <ul>
        <li id="id-9">Nadia, 28</li>
      </ul>
    </li>
  </ul>
</div>
```

### 8 Pintar en pantalla los nombres de las promos y los nombres, la edad, el id de las alumnas y pintar el id de la alumna en consola cuando se haga click en una de ellas

### 8 Paint on screen the names of the promos and the names, age, id of the students and paint the id of the student on the console when clicking on one of them

```html
<div class="js-result">
  <ul>
    <li>
      <p>Nombre: Ada</p>
      <ul>
        <li id="id-1">Sofía, 20</li>
        <li id="id-2">María, 21</li>
        <li id="id-3">Lucía, 22</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Borg</p>
      <ul>
        <li id="id-4">Julia, 23</li>
        <li id="id-5">Tania, 24</li>
        <li id="id-6">Alaia, 25</li>
      </ul>
    </li>
    <li>
      <p>Nombre: Clarke</p>
      <ul>
        <li id="id-7">Lidia, 26</li>
        <li id="id-8">Celia, 27</li>
        <li id="id-9">Nadia, 28</li>
      </ul>
    </li>
  </ul>
</div>
```

Para hacer esto hay varias formas pero la mejor es escuchar un click sobre el div que lo recubre todo y trabajar con el evento. Al escuchar un evento sobre un elemento que recubre los que nos interesa estamos haciendo [Event delegation](https://books.adalab.es/materiales-front-end-h/modulo-2.-programando-la-web/2_5_eventos#ejercicio-12-bonus).

Os damos unas pistas:

```js
const resultElement = document.querySelector(".js-result");

const logStudentId = function (ev) {
  console.log("Current target:", ev.currentTarget);
  console.log("Target:", ev.target);
  debugger;
  // coger el id del evento ev.target o del ev.currentTarget
  // y luego pintarlo en consola
};

resultElement.addEventListener("click", logStudentId);
```
