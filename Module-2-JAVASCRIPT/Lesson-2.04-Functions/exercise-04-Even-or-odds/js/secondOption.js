
let number = 20;

function getEven(number){
  const module = number % 2;
  if(module === 0){
      return "par";
  }else {
    return "impar";
  }
}

const result = getEven(number);
//console.log("El número " + number + " es " + result);
console.log(result);