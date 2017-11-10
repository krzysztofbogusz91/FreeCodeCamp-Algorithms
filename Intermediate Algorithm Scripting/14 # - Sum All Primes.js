/*
Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()

*/

//function checking if num is a prime
function isPrime(n){
if(n<2) return false;
  
for(var j = 2;j<n;j++){
  if(n%j==0){
    return false;
  }
}  
  return true;
}

function sumPrimes(num) {
  
  var arr = [];
  
  for(var i = 0; i <=num;i++){
    if(isPrime(i)!==false){
      arr.push(i);
    }
  }
  
  
  
  return arr.reduce(function(a,b){return a + b;});
}

sumPrimes(977);
