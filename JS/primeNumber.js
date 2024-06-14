function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function findPrimesBelow(limit) {
    const primes = [];
    for (let i = 2; i < limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const primesBelow10000 = findPrimesBelow(10000);
console.log(primesBelow10000);