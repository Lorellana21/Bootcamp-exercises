'use strict';

//1: a function that writes `potato` 10 times in the console, the function will be called `ten()`

function ten() {
    for (let i = 0; i < 10; i++) {
      console.log("patata");
    }
  }
  ten();

//2: modify our `ten()` function to accept a `word` parameter, and we're going to call the function 3 times, passing it a different word each time:

function ten(word){
    console.log(word);
}
ten("potato")
ten("Avocado")
ten("Pizza")

//3: write a different number of times each time. 

function writeThis(word, number){
    for (let i = 0; i < number; i++) {
              console.log(word);
            }
}
writeThis('potato', 10);
writeThis('avocado', 7);
writeThis('Pizza', 50);

//4: write the words we pass it a random number of times from 0 to 10

function writeThis(word, getRandomNumber){
  for (let i = 0; i < getRandomNumber ; i++) {
    console.log(word);
  }

}
function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

writeThis('potato', getRandomNumber(10));
writeThis('avocado', getRandomNumber(10));
writeThis('pizza', getRandomNumber(10));

//5: a list of words and numbers.

const myWordList = [
{
text: 'Pencil',
total: 6
},
{
text: 'Thermo',
total: 2
},
{
text: 'TV',
total: 8
},
{
text: 'Phone',
total: 4
}
];

function writeMyArray(arr){
  for(let i = 0; i < arr.length; i++){
    let text = arr[i].text;
    let total = arr[i].total;
    writeThis(text, total);
  }

} 
writeMyArray(myWordList);

 //6:

 function getInfoFromApi(){
   fetch ("https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json")
   .then(response => response.json())
  .then(data => {
    const arrayServer = data.results;
    writeMyArray(arrayServer);
  })
 }

 getInfoFromApi();

 