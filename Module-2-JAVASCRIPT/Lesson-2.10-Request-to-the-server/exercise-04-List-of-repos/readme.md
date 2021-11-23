## Listado de repos de una organización en Github

Vamos a seguir explorando la parte del [API para acceder a la info sobre organizaciones](https://docs.github.com/en/rest/reference/orgs). La URL de este API es `https://api.github.com/orgs/{orgname}`, donde `{orgname}` es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab `https://api.github.com/orgs/Adalab`. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub. Por ejemplo, para Adalab, el resultado final debería ser similar a este:

![](https://books.adalab.es/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2F74d853947a9b3b0a9af9e1c71eeb8539f414fcc8.png?generation=1625043392019582&alt=media)

Para ello vamos a hacer lo siguiente:

1. Preparar un input con un botón para que la usuaria introduzca la organización.
1. Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.
1. Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad `repos_url`) y hacer una nueva petición a esa URL.
1. En el último `then` pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad `name` de cada objeto repositorio).

---

## List of repos for an organisation on Github

Let's continue exploring the part of the [API for accessing organisation info](https://docs.github.com/en/rest/reference/orgs). The URL of this API is `https://api.github.com/orgs/{orgname}`, where `{orgname}` is the name of the organisation on GitHub. For example, here is the URL to get information about the organisation Adalab `https://api.github.com/orgs/Adalab`. If you put this URL in a new browser tab, you can see what data the API returns.
The aim of this exercise is to show in a web the complete list of the repositories of an organisation created in GitHub. For example, for Adalab, the final result should be similar to the above image.

To do this, we are going to do the following:

1. Prepare an input with a button for the user to enter the organisation.
1. When the user clicks on the search button, access the information of the organisation as the first request to the server.
1. Collect the information of the URL where to consult the information of the organisation's repositories in the server's response (in the `repos_url` property) and make a new request to that URL.
1. In the last then paint in our web the name of all the organisation's repositories in a list (`name` property of each repository object).
