// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

"use strict";
const largestInts = (array) => {

  if (!Array.isArray(array) || !Array.isArray(array[0])) {
    throw Error("Input needs to be a nested array.");
  } 

  let maxValues = [];

  for (let i = 0, l = array.length; i < l; i += 1) {
    let temp = 0;
    for (let j = 0, len = array[i].length; j < len; j += 1) {
      if (array[i][j] > temp) {
        temp = array[i][j];
      }
    }
    maxValues.push(temp);
  }

  return maxValues;
};

largestInts([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);