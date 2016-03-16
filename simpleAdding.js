//Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
//For the test cases, the parameter num will be any number from 1 to 1000. 

function SimpleAdding(num) {
  var x = 0;
  while (num > 0) {
    x += num;
    num--;
  };
  return x;
}

//recursive solution
function SimpleAdding(num) { 
  if(num === 1){
    return 1; 
  }
  return num + SimpleAdding(num - 1);
}


