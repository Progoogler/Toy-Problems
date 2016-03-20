// Return the remaining elements of an array after chopping off n 
// elements from the head.
"use strict";
const slasher = (arr, howMany) => {

  while (howMany > 0) {
    arr.shift();
    howMany--;
  }
  return arr;
};

/*  splice() is slower than the shift() method
*
*	const slasher = (arr, howMany) => {
*	  return arr.splice(howMany, howMany);
*	};
*
*/

slasher([1, 2, 3], 2);
