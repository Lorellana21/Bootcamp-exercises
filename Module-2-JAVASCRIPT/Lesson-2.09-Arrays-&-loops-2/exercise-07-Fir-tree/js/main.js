'use strict';

let triangle = '▲';
let star = "★";
let trunk = "|";


function paintTree(lines){
  console.log("    " + star);

  for (let i = 0; i < lines; i++){
    let space = "";

    for(let j = 1; j < lines - i; j++){
      space = space + " ";
    }
    for (let j = 0; j < lines - 3; j++) {
      space = space + triangle.repeat(i + 1);
  }
  console.log(space);
}
console.log("    " + trunk);
}
paintTree(5);


