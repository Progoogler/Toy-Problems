/*
* A hash table algorithm that locates primes numbers
* within a specified range that satisfies the invariants
* of the hash table size, which are primes not too close
* to a power of 2 nor too close to a power of 10.
* 
* The algorithm uses a helper function on top of a prime number 
* seeker function to test whether the prime number found is
* at least +/- 100 units away from a power of 2 or 10.
*
* Test Case:
* hashTableSize.generatePrimes(100000, 99500);
*/
var hashTablePrimes = (function(){

  var powerTest = function(n) {
    var x = 2,
        y = 2,
        baseTwo,
        baseTen;

    while (Math.pow(2,x) < n) {
      x++;
    }
    baseTwo = Math.pow(2,x);
    
    while (Math.pow(10,y) < n) {
      y++;
    }
    baseTen = Math.pow(10,y);c
    
    if (baseTwo - n > 100 && baseTen - n > 100) {
      if (n - Math.pow(2,--x) > 100 && n - Math.pow(10,--y) > 100) {
        return true;
      }
    }
    return false;
  };

  var generatePrimes = function(n, lowerBound) {
    var result = [],
        bool,
        limit;

    if (typeof lowerBound === 'number') {
      for (var i = n; i >= lowerBound; i--) {
        limit = Math.ceil(i / 2);
        bool = true;

        for (var x = 2; x <= limit; x++) {

          if (i % x === 0) {
            bool = false;
            x = limit;
          } else if (x === limit && bool === true) {
            if (powerTest(i)) {
              result.push(i);
            }
          }
        }
      }
      
    } else {

      for (var i = n; i > 1; i--) {
          limit = Math.ceil(i / 2);
          bool = true;

        for (var x = 2; x <= limit; x++) {

          if (i % x === 0) {
              bool = false;
              x = limit;
          } else if (x === limit && bool === true) {
            if (powerTest(i)) {
              result.push(i);
            }
          }
        }
      }
    }

    return result;
  };

	return {
		generatePrimes: generatePrimes
	};

})();