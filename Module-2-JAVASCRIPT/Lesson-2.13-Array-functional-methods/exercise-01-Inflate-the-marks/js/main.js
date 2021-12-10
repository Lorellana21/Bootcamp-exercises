'use strict';

const marks = [5, 4, 6, 7, 9];

//First option
/*const inflatedMarks = marks.map(mark => mark + 1);
console.log(inflatedMarks);*/

//Second option
const addOne = (mark) => mark + 1;
const inflatedMarks = marks.map(addOne);
console.log(inflatedMarks);