let num = "9";
console.log(Number(num) + 10);
console.log(+num + 10);

// Date
let date = new Date();
console.log(date);

// Generate Current Year
console.log(date.getFullYear());

// Generate Current Month
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
console.log(months[date.getMonth()]);

// Generate Current Day
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[date.getDay()]);

// Generate Time
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// Function
// Function Declaration
function greet(name, TimePart) {
  console.log("Good", TimePart, name);
}

greet("Abhishek", "Morning");
greet("Shreya", "Evening");

// Sum of 2 Numbers
function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(234, 678);
sum(24, 7);

// Sum of all numbers from start to end
function sumofAll(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  console.log(sum);
}

sumofAll(1, 10);
sumofAll(100, 1000);

// Function to find a number is a prime or not
function isPrime(number) {
  if (number === 1) return console.log("Unique Number");

  let prime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }

  if (prime) console.log("Prime Number");
  else console.log("Not a Prime Number");
}

isPrime(25);
isPrime(27);
isPrime(7);
isPrime(1);

// Function Expression
const greet1 = function (name, TimePart) {
  console.log("Good", TimePart, name);
};

greet1("Adarsh", "Afternoon");

const isPrimeCopy = function (number) {
  if (number === 1) return console.log("Unique Number");

  let prime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }

  if (prime) console.log("Prime Number");
  else console.log("Not a Prime Number");
};

isPrimeCopy(234);

// Arrow Function
const greet2 = (name, TimePart) => {
  console.log("Good", TimePart, name);
};

greet2("Rahul", "Evening");

const sumofAll1 = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  console.log(sum);
};

sumofAll1(1, 10);
sumofAll1(100, 1000);

const something = () => {
  console.log("Today is day 12");
  return;
  console.log("Today is day 13");
};

something();

const something2 = () => {
  console.log("Abhishek Nayak");
  return 7077358291;
};

const x = something2();
console.log(x);

// Spread in Arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 8, 8];

let arr = [...arr2, ...arr1];
console.log(arr);

// Spread in Objects
let person = {
  name: "Abhishek",
  age: 26,
};

let otherWorks = {
  designation: "Coder",
  youtuber: true,
};

const combinedObj = { ...person, ...otherWorks };
console.log(combinedObj);

// Rest Operators
const [rollNumber, empId, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(rollNumber, empId, rest);

// Using rest operator in Function
const sumOfAllParams = (...rest) => {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  console.log(sum);
};

sumOfAllParams(1, 2);
sumOfAllParams(1, 2, 3, 4);

// Homework
// 1. Merge 2 Arrays which contains duplicates then Sort it After Sorting Remove the Duplicates from the array
// 2. Write a Function to Find the Factorial of a Number using Arrow Function, Function Expression and Function Declartion
// 3. Create a Timer Function which print this or return this [DD:MM:YYYY - HH:MM:SS]
