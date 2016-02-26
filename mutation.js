// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

var mutation = function(arr) {
	"use strict";

  let match = arr[0].toLowerCase();
  let compare = arr[1].toLowerCase();
  
  for (let i = 0, l = compare.length; i < l; i++) {
    if (match.indexOf(compare[i]) < 0) {
      return false;
    }
  }

  return true;
};

mutation(['Mary', 'Army']);
