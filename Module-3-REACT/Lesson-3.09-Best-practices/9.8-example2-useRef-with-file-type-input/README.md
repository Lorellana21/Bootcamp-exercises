# useRef con un input de tipo file

Veamos un ejemplo un poco más complejo. El `<input type="file" />` es otro de los elementos HTML que React no tiene valor para gestionar, y menos aún cuando queremos manipular una imagen del ordenador de la usuaria.
Por ello estamos obligadas a utilizar useRef. En este ejemplo creamos un componente ImageReader para obtener una imagen del ordenador de la usuaria.
