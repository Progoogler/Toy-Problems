//Remove all falsy values from an array.
//Falsy values in javascript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return filter(arr, function(item) {
    if (item !== false || '' || "" || null || undefined || NaN) {
      return item;
    }
  });
}

//build an each function for filter
function each(collection, callback) {
  for (var i = 0, l = collection.length; i < l; i++) {
    callback(collection[i]);
  };
}

//use filter function to only return values which are truthy
function filter(collection, predicate) {
  var passed = [];
  each(collection, function(item) {
    if (predicate(item)) {
      passed.push(item);
    };
  });
  return passed;
}

bouncer([7, 'ate', '', false, 9]);
