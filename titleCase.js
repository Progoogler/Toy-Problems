/**
Return the provided string with the first letter of each word capitalized.

For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

expect(titleCase("I'm a little tea pot")).to.be.a('String');
expect(titleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot");
expect(titleCase("sHoRt AnD sToUt")).to.equal("Short And Stout");
expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout");
*/

function titleCase(str) {
  var arr = str.split(' ');
  var temp = '';
  var char = '';
  for (var i = 0; i < arr.length; i += 1) {
    temp = arr[i].substring(1, arr[i].length).toLowerCase();
    char = arr[i].charAt(0).toUpperCase();
    arr[i] = char.concat(temp);
  };
  str = arr.join(' ')
  return str;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
