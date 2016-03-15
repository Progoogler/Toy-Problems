/*
* Count positive integers with 0 as a digit and maximum ‘d’ digits
* Given a number d, representing the number of digits of a number. 
* Find the total count of positive integers which have at-least one zero 
* in them and consist d or less digits.
* 
* Examples:
* Input : d = 1
* Output : 0
* There's no natural number of 1 digit that contains a zero.
* 
* Input : d = 2
* Output : 9
* 
* Input : d = 3
* Output : 180
* For d = 3, we've to count numbers from 1 to 999, that have 
* atleast one zero in them.
* Similarly for d=4, we'd check every number from 1 to 9999. 
* This is mainly an extension of below post.
* 
* Count ‘d’ digit positive integers with 0 as a digit.
*/
"use strict";
const zeroDigitCount = function(digits) {
  if (digits < 2) {
  	throw ("Error: There does not exist a natural number with 0 in that range.");
  }
  let count = 0,
      countDown = "";

  while (digits > 0) {
  	countDown += 9;
  	digits--;
  }
  countDown = parseInt(countDown);

  for (; countDown > 9; countDown -= 1) {
  	let temp = countDown + "";
  	for (let i = temp.length-1; i >= 1; i--) {
  	  if (parseInt(temp[i]) === 0) {
  			count += 1;
  		  break;
  		}
  	}
  }
  return count;
};

zeroDigitCount(4);