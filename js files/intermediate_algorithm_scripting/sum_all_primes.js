// Trial division
function sumPrimes(num) {

    // Checks if num is prime by trial division
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0){
          return false;
        }
      }
      return true;
    }
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
}

console.log(sumPrimes(977));



// Sieve of Eratosthenes
function sieveOfEratosthenes(num) {
  let primes = [];
  primes[1] = false;
  primes[2] = true;

  // start with a first prime number for both p and i
  let p = 2;

  for (let i = 2; i * p <= num; i++) {
    let res = p * i;

    // check if next i iter is going to be larger than num, if so, find next prime number larger than p
    if(p * (i+1) > num) {
      i = 2;
      for (j = p+1; j < primes.length; j++) {
        if (primes[j] === undefined) {
          primes[j] = true;
          p = j;
          break;
        }
      }
    }

    primes[res] = false;
  }

  // if last number is not in the list, initialize it to undefined
  if (primes[num] != false) {
    primes[num] = undefined;
  }

  // sum all primes (true or undefined)
  let sum = 0;
  for (let i = 1; i < primes.length; i++) {
    if (primes[i] === true || primes[i] === undefined) {
      sum += i;
    }
    // console.log(i + " " + primes[i]);
  }

  return sum;
}

console.log(sieveOfEratosthenes(977));



// Better Sieve
function sumPrimesBetterSieve(num) {
  // Prime number sieve
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}

console.log(sumPrimesBetterSieve(977));