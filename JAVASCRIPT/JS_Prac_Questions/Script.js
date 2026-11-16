// Print Hello World in 3 different ways: console.log(), alert(), document.write()
// 1) console.log
// console.log("Hello World!");

// // 2) alert
// alert("Hello World!");

// // 3) document.write
// document.write("Hello World!");

// Adding Numbers: 1)Static Numbers 2) Dynamic Numbers
// 1) Static Numbers
// let a = 5;
// let b = 10;
// let sum  =  a + b;
// console.log("The sum of a and b is:", + sum);

// Dynamic Numbers
// let a1 = parseInt(prompt("Enter the value of Number 1:"));
// let b1 = parseInt(prompt("Enter the value of Number 2:"));

// let sum1 = a1 + b1;
// console.log("The sum of a1 and b1 is:", + sum1);

// Finding the square root of a number
// let num = parseInt(prompt("Enter your number for finding the squareroot:"));
// let squareroot = Math.sqrt(num);

// console.log("The squareRoot of the number is:", + squareroot);

// Calculating the area of a triangle
// let base = 10.5;
// let height = 2;
// let area = (base * height)/2;

// console.log("The area of the triangle is: " + area);

// Swapping two variables using temoprary variable
// let a = 5;
// let b = 20;
// let temp = a;
// a = b;
// b = temp;

// console.log("The values of a and b before swapping are: " + b + ", " + a);
// console.log("The values of a and b after swapping are: " + a + ", " + b);

// Swapping two variables without using temporary variable  
// let a = 5;
// let b = 10;

// performing swapping
// a = a + b;
// b = a - b;
// a = a - b;

// console.log("The values of a and b before swapping are: " + b + ", " + a);
// console.log("The values of a and b after swapping are: " + a + ", " + b);

// Converting Kilometer to Miles

// let kilometer = parseFloat(prompt("Enter your Kilometer value:"));

// step - 1: by multiplying
// let miles = kilometer * 0.621371;

// console.log("The value of kilometer in miles is:" + miles);

//step - 2: by dividling
// let miles1 = kilometer / 1.609344;

// console.log("The value of kilometer in miles is:" + miles1);

// Coversion of Celcius to Fahrenheit
let celcius = parseFloat(prompt("Enter the celcius value:"));

let fahrenheit = (celcius * 9/5) + 32;

console.log("The Value of converting Celcius to Fahrenheit is: " + fahrenheit);