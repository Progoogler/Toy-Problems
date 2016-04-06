/*
* Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers 
* stored in arr and return the second lowest and second greatest numbers, respectively, 
* separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
* The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
*/

function secondGreatLow(arr) {
  var low = 0;
  var high;
  var lowest;
  var highest;
  arr = arr.sort(function(a,b) {
    return a - b;
  });
  lowest = arr[0];
  highest = arr[arr.length - 1];
  high = highest + 1;

  if (arr.length === 2) {
    low = arr[0];
    high = arr[1];
  }

  while (low <= lowest) {
    low = arr.shift();
  }
  while (highest <= high) {
    high = arr.pop();
  }

  return low + " " + high;
}

secondGreatLow([13, 7, 7, 12, 135, 32, 8, 70, 98, 106]);
