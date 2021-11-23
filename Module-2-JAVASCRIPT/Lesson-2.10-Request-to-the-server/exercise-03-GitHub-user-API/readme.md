## API de usuarios de GitHub

Ahora vamos a explorar un nuevo API: [el API de usuarios de GitHub](https://docs.github.com/en/rest/reference/users). La URL de este API es `https://api.github.com/users/{username}`, donde `{username}` es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario Isra `https://api.github.com/users/gootyfer`. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:

- nombre
- número de repositorios
- avatar (imagen)

![](https://books.adalab.es/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2Ff3fcaa2d48b8ad6ebe8d6c34da516d72f384fb0e.png?generation=1625043392187610&alt=media)

---

## GitHub user API

Now let's explore a new API: [the GitHub user API](https://docs.github.com/en/rest/reference/users). The URL for this API is `https://api.github.com/users/{username}`, where `{username}` is the name of the user on GitHub. For example, here is the URL for Isra's user information `https://api.github.com/users/gootyfer`. If you put this URL in a new browser tab you can see what data the API returns.

We are going to create a page with a text input and a search button. The user will type a GitHub username in the input. We'll prepare a function that runs when the search button is pressed and contains a request to the API to get information about that user and display it on our page:

- name
- repositories number
- avatar (image)
