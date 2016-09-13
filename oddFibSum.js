var oddFibSum = (num) => {
  'use strict';

  let oddResult = 1;
  let x = 1;
  let prev = 0;
  let temp;
  
  let oddFib = (n) => {
    if (n % 2 !== 0) {
        oddResult += n;
      } 
  };
    
  while (x + prev <= num) {
    temp = x;
    x += prev;
    prev = temp;
    oddFib(x);
  }

  return oddResult;
};
