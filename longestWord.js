/*Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
Example string : 'Web Development Tutorial' 
Expected Output : 'Development'*/
"use strict";
const longestWord = (string) => {
	let longest = "",
	    compare = string.split(' ');
	for(let i = 0; i < compare.length; i += 1) {
		if(compare[i].length > longest.length) {
			longest = compare[i];
		}
	}

	return longest;
};

longestWord('Web Development Tutorial');

//W3Resource method:

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
alert(find_longest_word('Web Development Tutorial'));
