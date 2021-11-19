'use strict';

const arr = [];

function get100Numbers(){
    
    for(let i = 1; i <= 100; i++){
        arr.push(i);
    }
}
get100Numbers();
console.log(arr);