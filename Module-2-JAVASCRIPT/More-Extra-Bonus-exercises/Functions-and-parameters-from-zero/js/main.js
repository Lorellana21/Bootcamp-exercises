'use strict';

//1: a function that writes `potato` 10 times in the console, the function will be called `ten()`

// function ten() {
//     for (let i = 0; i < 10; i++) {
//       console.log("patata");
//     }
//   }
//   ten();

//2: modify our `ten()` function to accept a `word` parameter, and we're going to call the function 3 times, passing it a different word each time:

function ten(word){
    console.log(word);
}
ten("potato")
ten("Avocado")
ten("Pizza")