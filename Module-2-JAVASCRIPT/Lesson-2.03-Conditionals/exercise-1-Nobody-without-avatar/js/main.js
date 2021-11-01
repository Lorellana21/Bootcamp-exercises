'use strict';

//Cojo la img del HTML
const imgAvatar = document.querySelector (".js-user__avatar");

 // avatar por defecto
 const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
var userAvatar = 'http://www.fillmurray.com/300/300';

//Añado la img de useravatar al cuerpo de la img de HTML
// image.src = userAvatar;
// console.log(userAvatar);

//Asi no se ve ninguna imagen en la página
var userAvatar = '';
imgAvatar.src = userAvatar || DEFAULT_AVATAR;

console.log(userAvatar);




