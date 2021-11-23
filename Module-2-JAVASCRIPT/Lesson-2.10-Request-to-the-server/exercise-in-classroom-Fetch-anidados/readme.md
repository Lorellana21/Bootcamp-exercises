## Peticiones encadenadas

Pedimos al API de Dog CEO ("https://dog.ceo/api/breeds/list") el listado de razas de perro usando promesas.

Luego vamos a pedir al servidor una foto de una raza concreta de perro. Para ello, por tanto, necesitamos conocer primero el listado de razas y luego, con esta información, pedir al servidor una foto de una raza concreta. Por tanto son dos callbacks encadenados, es decir, que la segunda petición depende de los datos que llegan en la primera.

---

## Chained requests

We ask the Dog CEO API ("https://dog.ceo/api/breeds/list") for the list of dog breeds using promises.

Then we are going to ask the server for a picture of a specific breed of dog. To do this, therefore, we first need to know the list of breeds and then, with this information, ask the server for a picture of a specific breed. Therefore, these are two chained callbacks, i.e., the second request depends on the data received in the first one.
