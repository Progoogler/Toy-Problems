/*
* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
* Return the truncated string with a '...' ending.
* 
* Note that the three dots at the end add to the string length.
*/
"use strict";
const truncateSlice = (str, length) => {
	if (str.length > length) {
	  str = str.slice(0, length - 3);
	  str = str + '...';
	}

  return str;
};

console.log(truncateSlice('A-tisket a-tasket A green and yellow basket', 11));

const truncateLoop = (str, length) => {
	let result = [];
	for (let i = 0; i < length - 3; i++) {
		result.push(str[i]);
	}
	for (let i = 1; i < 4; i++) {
		result.push(".");
	}

	return result.join("");
};

console.log(truncateLoop('A-tisket a-tasket A green and yellow basket', 11));
