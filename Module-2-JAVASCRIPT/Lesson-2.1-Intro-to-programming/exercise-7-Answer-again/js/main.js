'use strict';

const list = document.querySelector (".js-list");

//Asi:

const content = "<li>1</li><li>2</li><li>3</li>";

list.innerHTML = content;


//O así:
//list.innerHTML = "<li>1</li><li>2</li><li>3</li>";

console.log(list);
