// Our goal is to write a boolean function that will take two strings and 
// return whether they are anagrams.

function anagram(word1, word2) {
  word1 = word1.split('').sort();
  word2 = word2.split('').sort();
  if (word1.join('') === word2.join('')) {
    return true;
  }

  return false;
}

anagram("abracadabra", "arbadacarba");

// More code but runs half times faster than the above computations.
function anagram(word1, word2) {
  var alphabet;
  var stillOk = true;
  var a = "a".charCodeAt(0);
  var pos;
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  
  if (word1.length !== word2.length) {
    return false;
  };
  
  alphabet = Array.apply(null, Array(26)).map(Number.prototype.valueOf,0);
  
  for (var i = 0; i < word1.length; i ++) {
    pos = word1[i].charCodeAt(0) - a;
    alphabet[pos] += 1;
  };
  
  for (var j = 0; j < word2.length; j++) {
    pos = word1[j].charCodeAt(0) - a;
    alphabet[pos] += 1;
  };
  
  for (var m = 0; m < alphabet.length; m++) {
    if (alphabet[m] === 1) {
    console.log(alphabet[m]);
    stillOk = false;
    };
  };

  return stillOk;
}
anagram("abracadabra", "arbadacarba");


