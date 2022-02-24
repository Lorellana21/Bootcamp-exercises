# Lee un fichero, modifica los datos y escríbelos en otro fichero

1. En un ejercicio nuevo crea un fichero `input-file.json` con lo que tiene el fichero de destino del ejercicio anterior, por ejemplo:
   { "user": "Mari Carmen", "email": "mari@gmail.com", "age": 28 }
   Cuidado con la sintaxis: el JSON tiene que estar bien escrito, por ello, los nombres de las propiedades como user tienen que estar entre comillas dobles.
2. Crea un `index.js`.
   - Lee el contenido del fichero `input-file.json` y guárdalo en una constante.
   - El contenido de dicha constante será un texto. Conviértelo a objeto:
     [Pista: ¿Te acuerdas de qué herramienta tenemos para pasar un texto a objeto?](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
3. Modifica alguna propiedad del objeto, como por ejemplo el nombre o la edad.
4. Guarda el objeto en modo texto en un fichero de destino llamado `output-file.json`.

Pista: la asincronía es importante; debes guardar en el fichero de destino después de leer el fichero de origen.
