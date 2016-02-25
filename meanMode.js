/*
* Using the JavaScript language, have the function MeanMode(arr) take the array of numbers 
* stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other 
* (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
* The array will not be empty, will only contain positive integers, and will not contain more than one mode. 
*/

var meanMode = function(array) {

  var mean = 0, 
      mode, 
      i;

  // Optional sorting routine.
  array = array.sort(function(a,b) {
    return a - b;
  });

  for (i = 0; i < array.length; i++) {
    mean += array[i];
  }

  mean = Math.floor(mean / array.length);

  mode = array[Math.floor(array.length / 2)];

  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }

};

var arr = [5,3,3,3,1];
meanMode(arr);
