`use strict`;

//Ejercicio: Hay que pedir a una URL recetas de Francia o Italia y pintarlos en una lista. Esta API nos devuelve un conjunto de datos, un objeto, compuesto por una sola propiedad "meals", y esa propiedad a su vez es un array (un array de objetos). Vamos a quedarnos solo con los datos que nos interesan, ene ste caso los nombres de las comidas.

const btnElement = document.querySelector(".btn");
const selectElement = document.querySelector(".js-recipe");
const ulElement = document.querySelector(".recipes-list");
let recipes = []; //constante que es un array, porque quiero rellenarlo con "meals"

//pìntamos el listado
function renderRecipes() {
  //console.log(recipes);
  ulElement.innerHTML = ""; //cada vez que se llama a esta función hay que limpiar mi UL, dejarla vacía, para que no me esté pintando continuamente cada vez que cambio de opción (francia o italia)

  //para pintar esos datos en Html hay que hacer un bucle de "recipes"
  for (const recipe of recipes) {
    ulElement.innerHTML += `<li id="${recipe.idMeal}"> ${recipe.strMeal}</li>`;
  }
}
// Creamos una función para conectar con el API. Hacemos una peticion al servidor con la opcion seleccionada por la usuaria
function conectToApi() {
  const country = selectElement.value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`; //la URL cambiante tiene que estar en una constante antes de usarla en un Fetch.
  //console.log(url);
  fetch(url) //se hace el fetch una vez que la usuaria ha clickado
    .then((response) => response.json())
    .then((data) => {
      //estos datos los voy a guardar en un array, solo los datos que me interesan
      recipes = data.meals;
      renderRecipes(); //aqui la llamo pero la creo fuera (arriba)
      setLocalStogare(); //igual con esta
      //console.log(recipes);
    });
}
//añadimos al LS el listado de recetas
//Función para guardar los datos
function setLocalStogare() {
  localStorage.setItem("localList", JSON.stringify(recipes)); //el primer parámetro es el nombre que yo quiera. El segundo parámetro es para transformar el array a cadena de caracteres.
}

//Función para coger los datos guardados. Se ejecuta al cargar la pág
function getLocalStorage() {
  let list = JSON.parse(localStorage.getItem("localList"));
  console.log(list);
  //verifico que hay informacion en el el LS
  if (list != null) {
    return list;
  } else {
    return (list = []);
  }
}

//Función manejadora
function handlerClick() {
  // ev.preventDefault();
  conectToApi();
}

/* MAIN */
//Al hacer click llamo a la función manejadora
btnElement.addEventListener("click", handlerClick);
// al cargar la pagina llamo a funcion que extrae del localstorage
getLocalStorage();
console.log("cargo la pag");
