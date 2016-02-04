//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
//Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function prime(number) {

	var result;

	if (typeof number === 'number') {

		if (number === 1) {
			result = 1 + " is not a prime number";
		} else {

		for (var i = number - 1; i < number && i !== 1; i -= 1) {

				if (number % i === 0) {
					result = number + " is not a prime number.";
					return result;
				} else {
					result = number + " is a prime number.";
				};
			};
		};
	} else {
		console.log(number + " is not a number. Please enter a valid number.");
	};

	return result;
}


//W3Resource solution:

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x<n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
