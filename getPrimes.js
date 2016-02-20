var prime = (function(){

  var getPrimes = function(n) {
    var result = [],
        bool,
        limit;

    if (n === 1) {
      throw "1 is not a prime number."
    } else {

      for (var i = n; i > 1; i--) {
        limit = Math.ceil(i / 2);
        bool = true;

        for (var x = 2; x <= limit; x++) {

            if (i % x === 0) {
                bool = false;
                x = limit;
            } else if (x === limit && bool === true) {
                result.push(i);
            }
        }
      }
      result.push(2); 
    }

    return result;
  };

	return {
		getPrimes: getPrimes
	};

})();

prime.getPrimes(1000);