// For this challenge you will determine which word has the greatest number of repeated letters.

var charRepetition = function(string) {
    
    var wordArray = string.split(' ');
    string = string.split('');
    var arr = [];
    var temp;
    var counter = 1;
    var k = 0;
    
    for (var i = 0; i < string.length - 1; i++) { //["h","e","r","e"...]
        counter = 1;
        if (string[i] === " ") {
            k += 1;
            temp = '';
            counter = 1;
        } else {
           temp = string[i]; //temp = h
           for (var m = i + 1; string[m] !== " " && m < string.length; m++) {
             if (temp === string[m]) {
             counter += 1;
             }
           }
        if (counter > arr[k] || arr[k] == undefined) {
            arr.splice(k, 1, counter);
        }
      }    
    }
    var greatest = arr[0];
    
    for (var n = 1; n < arr.length; n++) {
        if (arr[n] > greatest) {
            greatest = arr[n];
        }
    }
    
    return wordArray[arr.indexOf(greatest)];   
};

