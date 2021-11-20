'use strict';

let triangle = '▲';

function paintTree(lines){
  for (let i = 0; i < lines; i++){
    console.log(triangle.repeat(i+1));/*El método repeat() construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.*/
  }
}
paintTree(5);





// function generatePyramid(num) {
//   let triangle = '▲';

//   for (let i = 1; i <= num; i++) {
//     console.log(triangle += triangle);
//   }
// }
// generatePyramid(5);


/*Genera 5 arrays*/
/*function generatePyramid(num) {
  for (var i = 1; i <= num; i++) {
    var arr = [];
    for (var j = 1; j <= i; j++) {
      arr.push("▲");
    }
    console.log(arr);
  }
}
generatePyramid(5);*/

