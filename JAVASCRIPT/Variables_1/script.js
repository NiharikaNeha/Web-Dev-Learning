// Variables
// Q.1 Create two variables a = 10 and b = 20. Print their sum.
let a = 10;
let b = 20;
console.log("The Sum Of a + b = ", a + b);

// Q.2 Store the price of a book in a variable and print it.
let price = 1200;
console.log("The Price of the book is ₹" + price);

// Q.3 Create variables for your first name and last name, then print your full name.
const First_Name = "Neha";
const Middle_Name = "Niharika";
const Last_Name = "Swain";
console.log("My Name is:", First_Name + " " + Middle_Name + " " + Last_Name);

// Q.4 Swap the values of two variables without using a third variable.
let r = 75;
let n = 57;
console.log("Before Swapping:");
console.log("r = ", r);
console.log("n = ", n);

r = r + n;
n = r - n;
r = r - n;
console.log("After Swapping:");
console.log("r = ", r);
console.log("n = ", n);

// Q.5 Store the radius of a circle and calculate its area.
let radius = 10;
let area1 = 3.14 * radius ** 2;
console.log("The Area Of The Circle = ", area1);

// Q.6 Store the length and width of a rectangle and calculate the area.
let length = 120;
let width = 10;
let area2 = length * width;
console.log(
  "The Value Of Length = ",
  length + " " + "The Value Of Width = ",
  width,
);
console.log("The Area Of The Rectangle is", area2);

// Q.7 Store the marks of three subjects and calculate the average.
let subject1 = 10;
let subject2 = 20;
let subject3 = 30;

let average = (subject1 + subject2 + subject3) / 3;

console.log("Subject 1 Marks =", subject1);
console.log("Subject 2 Marks =", subject2);
console.log("Subject 3 Marks =", subject3);
console.log("Average Marks =", average);

// Q.8 Create a variable called isStudent and assign true. Print it.
let isStudent = true;
console.log(isStudent);

// Q.9 Store your city name in a variable and display a welcome message.
let city = "Bhubaneswar";
console.log("Welcome To The Temple City:", city);

// Q.10 Declare multiple variables in one line.
let name = "Neha",
  age = 19,
  city1 = "Bhubaneswar";

console.log("My Name Is:", name);
console.log("My Age Is:", age);
console.log("I Live In :", city1);

// Q.11 Create variables to store a student's name, roll number, and percentage.
let student_data = {
  student_name: "Neha Niharikha Swain",
  roll_number: 2601030035,
  percentage: 75,
};
console.log(student_data);

// Q.12 Write a program to calculate the sum of two numbers using variables.
let num1 = 75;
let num2 = 57;
let sum = num1 + num2;
console.log("The Sum Of num1 and num2 = ", sum);

// Q.13 Write a program to calculate the product of three numbers.
let num3 = 10;
let num4 = 10;
let num5 = 10;
console.log("The Product Of num3, num4 and num5 is = ", num3 * num4 * num5);

// Q.14 Write a program to convert Celsius to Fahrenheit using variables.
let celcius = 10;
let fahrenheit = celcius * 1.8 + 32;
console.log("The Fahrenheit is = ", fahrenheit + "F");

// Q.15 Write a program to convert kilometers to meters.
let kilometer_value = 10;
let meter_value = kilometer_value * 1000;
console.log("The Following Meter Value Is:", meter_value + " meter");

// Q.16 Write a program to calculate Simple Interest.
let principal = 1000;
let rate = 7;
let time = 3;
const simple_interest = (principal * rate * time) / 100;
console.log("The S.I will be: ", simple_interest);

// Q.17 Write a program to calculate the perimeter of a rectangle.
let l = 20;
let w = 10;
const perimeter = 2 * (l + b);
console.log(
  "The Perimeter Of A Rectangle:", perimeter);

// Q.18 Write a program to calculate the total bill of five items.
let items = [200, 400, 100, 100, 1000];
const totalBill = items[0] + items[1] + items[2] + items[3] + items[4];
console.log("The Total Bill is:", totalBill)
// Q.19 Create variables for principal, rate, and time, then calculate Simple Interest.
let p = 1000;
let ra = 6;
let t = 4;
const SI = (p * ra * t) / 100;
console.log("The S.I will be: ", SI);

// Q.20 Create variables for your favorite movie and actor, then print:
let movie = "Harry Potter";
let acteress = "Emma Watson";
console.log("==========================================================================");
console.log("My Favorite Movie Is: " + movie + " And Favorite Acteress Is :" + acteress);
console.log("===========================================================================");
