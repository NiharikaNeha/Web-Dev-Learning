// Q.1
let x = 5;
let y = 10;

console.log(x++ + ++y);

// Q.2
let r = 10;

console.log(r++ + r++);

// Q.3
let N = 10;

N += 5;
N -= 3;
N *= 2;

console.log(N);

// Q.4
console.log(5 + 3 * 2 ** 2);

// Q.5
console.log(10 == "10");
console.log(10 === "10");

// Q.6
let a1 = 10;
let b1 = 3;

console.log(a1 + b1);

// Q.7
let a2 = 10;
let b2 = 3;

console.log(a2 + b2);

// Q.8
let a3 = 6;
let b3 = 4;

console.log(a3 * b3);

// Q.9
let a4 = 20;
let b4 = 4;

console.log(a4 / b4);

// Q.10
let a5 = 17;
let b5 = 5;

console.log(a5 % b5);

// Q.11
console.log(2 ** 3);

// Q.12
console.log(10 + 5 * 2);

// Q.13
console.log((10 + 5) * 2);

// Q.14
let x1 = 10;
x1 += 5;

console.log(x1);

// Q.15
let x2 = 20;
x2 -= 8;

console.log(x2);

// Q.16
let x3 = 5;
x3 *= 4;

console.log(x3);

// Q.17
let x4 = 20;
x4 /= 5;

console.log(x4);

// Q.18
let x5 = 17;
x5 %= 5;

console.log(x5);

// Q.19
let x6 = 2;
x6 **= 3;

console.log(x6);

// Q.20
console.log(10 > 5);

// Q.21
console.log(10 < 5);

// Q.22
console.log(10 == "10");

// Q.23
console.log(10 === "10");

// Q.24
console.log(10 != 5);

// Q.25
console.log(10 != 5);

// Q.26
console.log(10 !== "10");

// Q.27
console.log(10 >= 10);

// Q.28
console.log(5 <= 3);

// Q.29
console.log(true && true);

// Q.30
console.log(true && false);

// Q.31
console.log(false || true);

// Q.32
console.log(false || false);

// Q.33
console.log(!true);

// Q.34
console.log(!false);

// Q.35
let age = 20;

console.log(age >= 18 && age <= 60);

// Q.36
let age1 = 20;

let result = age1 >= 18 ? "Adult" : "Minor";

console.log(result);

// Q.37 Write a ternary operator to check whether a number is positive or negative.
let num = -75;
let result1 = num > 0 ? "The Number Is Positive" : "The Number Is Negative";

console.log(result1);

// Q.38 Write a ternary operator to check whether a number is even or odd.
let num2 = 24;
let result2 = num2 % 2 == 0 ? "The Number Is Even" : "The Number Is Odd";

console.log(result2);

// Q.39 Write a ternary operator to check whether a student has passed or failed.
let marks = 75;
let result3 = marks > 33 ? "The Student Is Passed" : "The Student Is Failed";

console.log(result3);

// Q.40 Write a ternary operator to find the greater of two numbers.
let num3 = 75;
let num4 = -75;
let compare =
  num3 > num4
    ? "The Number Is Greater"
    : num3 < num4
      ? "The Number Is Smaller"
      : "The Numbers Are Equal";

console.log(compare);
