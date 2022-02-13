import React from 'react';
import Item from "./Item";

const App=()=>{

 return (
   <div>
     <Item id="1" email="example@gmail.com" name="periquita" />
   </div>
 ) 
}

export default App;

const numbers =[1,2, 3]; 
//const number1 = array[0]; 
//const number2 = array[1]; 

const [number0,number1,number2]= numbers; 
console.log(number2);

const users = [
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Gregory Goyle', time: 56 }
];

const [obj1, obj2, obj3]= users; 
console.log("primero nombre "+ obj1.name + " tiempo "+ obj1.time); 



