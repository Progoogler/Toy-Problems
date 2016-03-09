/*
* Print all palindrome permutations of a string
* Given a string, we need to print all possible palindromes 
* that can be generated using letters of that string.
* 
* Examples:
* 
* Input:  str = "aabcb"
* Output: abcba bacab
* 
* Input:  str = "aabbcadad"
* Output: aabdcdbaa aadbcbdaa abadcdaba
*         abdacadba adabcbada adbacabda
*         baadcdaab badacadab bdaacaadb
*         daabcbaad dabacabad dbaacaabd
* We strongly recommend you to minimize your browser and try this yourself first.
* 
* Generation of palindrome can be done by following steps,
* 
* First we need to check whether letters of string can 
* make a palindrome or not, if not then return.

* After above checking we can make half part of first 
* palindrome string (lexicographically smallest) by 
* taking half frequency of each letter of the given string.

* Now traverse through all possible permutation of this half 
* string and each time add reverse of this part at the end and 
* add odd frequency character in mid between if string 
* is of odd length, for making the palindrome.
*/

"use strict";
const palindrome = function(string) {
  let char = {},
      count,
      result = [];

  for (let i = 0; i < string.length; i++) {
  	if (!char[string[i]]) {
  		count = 1;
  		char[string[i]] = count;
  	} else {
  		char[string[i]] += 1;
  	}
  }

  let check = 0,
      single,
      charArr = [];
  // String with an odd frequency character:
  if (string.length % 2 === 1) { console.log(char)
  	for (var ch in char) {
  		if (char[ch] % 2 === 0) {
  			charArr.push(ch);
  			for (let j = 1; j < char[ch] / 2; j++) {
  				charArr.push(ch);
  			}
  		}
  		if (char[ch] % 2 === 1) {
        single = ch;
  		  check += 1;
      }
  	}
  	if (check !== 1) {
  		throw new Error("String is not a palindrome!");
  	} else {
  		let x = 1,
  		    z = 0,
  		    l = charArr.length;
      while (x < l) {
      	let y = 0;
      	while (y < l) {
      	result[z] = [];
	      	for (let i = 0; i < l; i++) {
	          result[z].push(charArr[i]);
	      	}
	      	let rev = result[z];
	      	result[z] = result[z].concat(single).concat(rev.reverse()).join("");
	      	let temp = charArr.pop();
          charArr.unshift(temp);      	
	      	z++;
	      	y++;
	      }
        charArr.splice(x,0,charArr[charArr.length-1]);
        charArr.pop(); console.log(charArr)
        x++;
      }
  	}
  } else {
    // Even length string without an odd frequency character:
    for (var ch in char) {
      if (char[ch] % 2 === 0) {
        charArr.push(ch);
        for (let j = 1; j < char[ch] / 2; j++) {
          charArr.push(ch);
        }
      }
      if (char[ch] % 2 === 1) {
        throw new Error("String is not a palindrome!");
      }
    }
    let x = 1,
        z = 0,
        l = charArr.length;
    while (x < l) {
      let y = 0;
      while (y < l) {
        let rev = [];
        result[z] = [];
        for (let i = 0; i < l; i++) {
          result[z].push(charArr[i]);
          rev.push(charArr[i]);
        }
        result[z] = result[z].concat(rev.reverse()).join(""); console.log(result[z], rev)
        let temp = charArr.pop();
        charArr.unshift(temp);        
        z++;
        y++;
      }
      charArr.splice(x,0,charArr[charArr.length-1]);
      charArr.pop(); console.log(charArr)
      x++;
    }
  }

  return result;
};

palindrome("aabbcadad")