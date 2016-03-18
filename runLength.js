/*
* Using the JavaScript language, have the function RunLength(str) take the str parameter 
* being passed and return a compressed version of the string using the Run-length encoding algorithm. 
* This algorithm works by taking the occurrence of each repeating character and outputting that number 
* along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. 
* The string will not contain any numbers, punctuation, or symbols. 
*
* Input = "aaabbcde" Output = "3a2b1c1d1e"
*/
"use strict";
const runLength = str => { 

  let index,
      arr = [],
      count = 1,
      temp = '';

  // store unique characters into an array
  for (let i = 0, len = str.length; i < len; i++) {
    if (arr.indexOf(str[i]) < 0 || str.charCodeAt(i) !== str.charCodeAt(i - 1)) {
      arr.push(str[i]);
    }
  }

  for (let j = 0, len = str.length; j < len; j++) {
    // count number of character occurences
    temp = str[j];
    if (temp === str[j + 1]) {
      count += 1;
    } else if (typeof arr[arr.indexOf(temp) - 1] === 'number') {
      index = arr.lastIndexOf(temp);
      arr.splice(index, 0, count);
      count = 1;
    } else {
      // insert count before character index
      index = arr.indexOf(temp);
      arr.splice(index, 0, count);
      count = 1;
    }
  }

  arr = arr.join('');
  return arr; 
};

runLength("aabbcdwwwbbb");

