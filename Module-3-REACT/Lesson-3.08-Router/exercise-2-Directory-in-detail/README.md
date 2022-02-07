# Directorio con detalle

Vamos a partir del ejercicio de la sesión anterior sobre un directorio de personas. En la página
principal aparecía un listado de personas con información de https://randomuser.me/.

Vamos a hacer un enlace por cada persona de la lista para acceder a una vista de detalle
de esa persona.

Implementaremos la vista de detalle con un nuevo componente `PersonDetail` al que
navegaremos usando React router con una ruta por cada persona de la lista.

PISTA: `PersonDetail` debe tener acceso al id de cada
usuario y a los datos (que seguramente estarán en App). Usaremos `render` para poder
pasarle ambos datos.
