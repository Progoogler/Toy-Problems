// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?
"use strict";
const unique = string => {
  string = string.toLowerCase(); 
  for (var i = 0, l = string.length; i < l; i++) {
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
      alert("String does not contain all unique characters!");
      return false;
    }
  }
  return true;
};

unique("unique");
