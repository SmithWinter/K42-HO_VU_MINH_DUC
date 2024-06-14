// No. 1
function square(number) {
    return number * number;
}

let x = 5;
let xSquared = square(x);
console.log(`Square of ${x} is ${xSquared}`);

let y = 10;
let ySquared = square(y);
console.log(`Square of  ${y} is ${ySquared}`);

let z = -3;
let zSquared = square(z);
console.log(`Square of  ${z} is ${zSquared}`);

// No. 2
function calculateArea(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
}

function calculatePerimeter(radius) {
    const pi = Math.PI;
    return 2 * pi * radius;
}

let radius = 5;
let area = calculateArea(radius);
let perimeter = calculatePerimeter(radius);

console.log(`Radius is ${radius}`);
console.log(`Area is ${area.toFixed(2)}`);
console.log(`Perimeter is ${perimeter.toFixed(2)}`);

// No. 3
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let num = 5;
let result = factorial(num);
console.log(`Factorial of ${num} is ${result}`);

let anotherNum = 10;
let anotherResult = factorial(anotherNum);
console.log(`Factorial of ${anotherNum} is ${anotherResult}`);

// No. 4
function isDigit(character) {
    return !isNaN(character);
}

console.log(isDigit('5')); // true
console.log(isDigit('9')); // true
console.log(isDigit('a')); // false
console.log(isDigit(' ')); // false
console.log(isDigit('@')); // false

// No. 5
function findMin(a, b, c) {
    let min = a; 

    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }

    return min;
}

console.log(findMin(4, 2, 7)); // 2
console.log(findMin(-1, 0, 1)); // -1
console.log(findMin(10, 10, 10)); // 10
console.log(findMin(-5, -8, -3)); // -8

// No. 6
function isPositiveInteger(number) {
    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
        return false;
    }
    return true;
}

console.log(isPositiveInteger(5)); // true
console.log(isPositiveInteger(-3)); // false
console.log(isPositiveInteger(0)); // false
console.log(isPositiveInteger(10.5)); // false
console.log(isPositiveInteger('abc')); // false
console.log(isPositiveInteger(true)); // false

// No. 7
function swapIntegers(a, b) {
    let temp = a; 
    a = b;
    b = temp;

    return [a, b];
}

console.log(swapIntegers(5, 10)); // [10, 5]
console.log(swapIntegers(-3, 8)); //  [8, -3]
console.log(swapIntegers(0, 1)); // [1, 0]

// No. 8
function reverseArray(arr) {
    return arr.reverse();
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); // [5, 4, 3, 2, 1]

// No. 9
function countOccurrences(arr, char) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            count++;
        }
    }

    return count === 0 ? -1 : count;
}

let charArray = ['a', 'b', 'c', 'a', 'd', 'e', 'a'];
let character = 'a';
console.log(`Character '${character}' appear ${countOccurrences(charArray, character)} time(s)`);

character = 'z';
console.log(`Character'${character}' appear ${countOccurrences(charArray, character)} time(s)`);