'use strict';

//1: a function that writes `potato` 10 times in the console, the function will be called `ten()`

// function ten() {
//     for (let i = 0; i < 10; i++) {
//       console.log("patata");
//     }
//   }
//   ten();

//2: modify our `ten()` function to accept a `word` parameter, and we're going to call the function 3 times, passing it a different word each time:

// function ten(word){
//     console.log(word);
// }
// ten("potato")
// ten("Avocado")
// ten("Pizza")

//3: write a different number of times each time. 

function writeThis(word, number){
    for (let i = 0; i < number; i++) {
              console.log(word);
            }
}
writeThis('potato', 10);
writeThis('avocado', 7);
writeThis('Pizza', 50);

