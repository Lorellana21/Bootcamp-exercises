## Dayana mola

Partiendo de este HTML:

```
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>Dayana is Cool</title>
</head>
<body>
<main class="main">
<h1 class="main__title">
 Esa Dayana como mola, se merece una <span class="super-wave">OLA!</span>
</h1>
</main>
<script type="text/javascript" src="main.js"></script>
</body>
</html>
```


De este CSS:
```
.main { 
background-color: pink; 
}
.main__title { 
color: red; 
}
```

Y de este JavaScript:

```
const superWave = document.querySelector('.super-wave');
```

Tenemos que crear una clase nueva para destacar el texto OLA! y añadirla con JavaScript al
elemento con clase ``super-wave`` .
Prueba a loguear la constante ``superWave`` .

---

## Dayana is great

Starting from the HTML, CSS and JavaScript (above),
We have to create a new class to highlight the text OLA! and add it with JavaScript to the
element with `super-wave`.
Try logging the `superWave` constant .
