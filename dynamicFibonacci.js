/*
* The most trivial example of dynamic programming from
* a "top-down" implementation rather than "bottom-up".
*
* In the following 'memoized' Fibonacci function,
* the "dynamic" part of its functionality is in its
* caching of computed Fibonacci values of 'n', so that
* repeated look-ups for the Fibonacci values of (n - 1)
* or (n - 2) is quickly found inside the cache.
*
* The 'memo' array that performs as a cache for the
* function is what primarily turns a recursive algorithm
* into a dynamically programmed one. Which leads to
* the formula that dynamic programming requires three
* base functionalities to be formulized:
* 1. Memoization
* 2. Recursion
* 3. Guessing (Occurrence in other DP algorithms.)
*
* Test cases:
* // Requires 109 recursive calls to itself:
* fibonacci.normal(10);
* // Requires 17 recursive calls to itself:
* fibonacci.memoized(10);
*/

var fibonacci = (function() {

  var memoized = function(n) {
  	// 'memo' array stores Fibonacci value of 'n'. 
	  var memo = [],
	  // 'x' is a counter for number of times the function
	  // is called. (Strictly for comparison reason.)
	  x = 0;

    var fib = function(n) {
    	x++; console.log(x);

      // Variable to store the returned Fibonacci value of 'n'.
	    var fibo;

	    // When the recursive fib(n-1) & fib(n-2) is called, first search
	    // whether that Fibonacci value of 'n' has been cached in 'memo'.
	    if (memo[n]) {

	    	// Return the cached Fibonacci value of 'n' if it's already been computed.
	    	return memo[n];
	    }

	  	if (n < 3) {
	  		return fibo = 1;
	  	} else {
	  		// Compute the Fibonacci value of 'n'.
	      fibo = fib(n - 1) + fib(n - 2);

	      // Cache that Fibonacci value of 'n' at the nth index of 'memo'.
	      memo[n] = fibo;

	      // Return the result Fibonacci value of 'n' for the final addition
	      // computations in the combining stage of the recursive calls.
	      return fibo;
	  	}
	  };

	  return fib(n);
  };

  var normal = function(n) {
	  // Another counter to compare against memoized Fibonacci.
	  var x = 0;

	  var fib = function(n) {
		  x++; console.log(x);
		  
			if (n < 3) {
				return 1;
			} else {
				return fib(n-1) + fib(n-2);
			}
		};

		return fib(n);
	};

  return {
  	memoized: memoized,
  	normal: normal
  };

})();