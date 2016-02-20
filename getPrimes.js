var prime = (function(){
	
	var getPrimes = function(n) {
		var result = [],
		    bool = true;
    if (n === 1) {
      throw "1 is not a prime number."
    } else {
    	for (var i = n; i > 1; i--) {
        for (var x = 2; x < i; x++) {
        	if (i % x === 0) {
        		bool = false;
        		x = i - 1;
        	} else if (x === i - 1 && bool === true) {
        		result.push(i);
        	}
        }
        bool = true;
    	}
    	if (n > 1) {
    		result.push(2);
    	}
    }
    return result;
	};

	return {
		getPrimes: getPrimes
	};

})();

prime.getPrimes(1000);