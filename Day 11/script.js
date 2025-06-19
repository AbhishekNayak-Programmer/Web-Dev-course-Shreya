// Print 1 to 10
let start = 1;

while (start <= 10) {
  console.log(start);
  start++;
}

// Ouput Based Question
start = 1;

// while (start >= 10) {
//   console.log(start);
//   start++;
// }
console.log(start);

// Print 1 to 10
start = 1;

do {
  console.log(start);
  start++;
} while (start <= 10);

// Ouput Based Question
start = 1;

do {
  console.log(start);
  start++;
} while (start >= 10);

// Break and Continue
for (let i = 0; i <= 10; i++) {
  if (i === 5) break;
  console.log("Abhishek");
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

let arr = [true, "Abhishek", true, 90, true, [378494]];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr.length);

console.log(arr[arr.length - 1]);

// Add element to the end
arr.push("Adarsh");
console.log(arr);

// Add element to the start
arr.unshift(100);
console.log(arr);

// Remove the Element from the end
arr.pop();
console.log(arr);

// Remove the Element from the start
arr.shift();
console.log(arr);

// Includes or Not
console.log(arr.includes("Abhishek"));

// Index Of
console.log(arr.indexOf(true));

// Last Index of
console.log(arr.lastIndexOf(true));

// Looping over Array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === true) {
    console.log("Index of true : ", i);
  }
}

// Reversing a Array
console.log(arr.reverse());

// Sorting the Arrays
arr = [11234, 345, 45, 78, 43, 478, 2456];

// Ascending Order
arr.sort((a, b) => a - b);
console.log(arr);

// Decending Order
arr.sort((a, b) => b - a);
console.log(arr);

// String Sorting
arr = ["Abhishek", "Zzzz", "Adarash", "Shreya", "Ram", "Shyam"];
console.log(arr.sort());

// Slice Method
arr = [90, "Abhishek", true, 2893, 2738494, 56789, "Ab"];
console.log(arr.slice(2));
console.log(arr.slice(2, 5));

// Flat Method
arr = [2345, 68, 78, [234, 78, [3456, 7778, 9, ["Abhishek"]]]];
console.log(arr.flat(Infinity));

arr = ["I", "am", "a", "coder"];
console.log(arr.join(" "));

// Looping over the array
arr = ["Abhishek", "Zzzz", "Adarash", "Shreya", "Ram", "Shyam"];

for (let i = 0; i < arr.length; i++) {
  console.log("Good Morning", arr[i]);
}

// For Each Loop
arr = ["Abhishek", "Zzzz", "Adarash", "Shreya", "Ram", "Shyam"];

arr.forEach((el, ind) => {
  console.log(el, ind);
});

// Homework
// 1. Create a empty array and fill the numbers from 50 to 35 and then reverse that array and remove first and last element from array
// 2. After above operations find all the odd numbers inside the array (print it in console)

let x = 456;
console.log(typeof x);

x = "name";
console.log(typeof x);

x = [1234];
console.log(typeof x);

arr = [1, 1, 1, 1, 1, 1, 3];
console.log(arr);

const ans = new Set(arr);
console.log(ans);

const set = new Set();
console.log(set);
set.add(1);
set.add(1);
set.add(1);
set.add(2);
set.add(2);
set.add("Abhishek Nayak");
console.log(set);
console.log(set.size);
set.delete(1);
console.log(set);

// Checking the variable is array or not
arr = [1234, 678, "Ahdfjgklh"];
console.log(Array.isArray(arr));

// AND GATE
// T + T = T
// T + F = F
// F + T = F
// F + F = F

// And Operation with IF Else
let wifi = true,
  wake = true;
if (wifi && wake) {
  console.log("I will do the class");
} else {
  console.log("I am unable to do the class");
}

// OR Gate
// T + F = T
// F + T = T
// T + T = T
// F + F = F

// OR Operation with IF Else
wifi = false;
wake = true;

if (wifi || wake) {
  console.log("I will do the class");
} else {
  console.log("I am unable to do the class");
}

// NOT GATE
// T - F
// F - T

let isValid = false;
if (!isValid) {
  console.log("You are valid to drive car");
} else console.log("You are not valid");

// Object - One Way
let obj = {};
console.log(obj);
obj = { ...obj, name: "Abhishek", age: "26", address: "hyderabad" };
console.log(obj);
obj = { ...obj, favoriteColor: "lightblue" };
console.log(obj);
obj = {
  ...obj,
  address: "delhi",
  favoriteNumbers: [2, 34, 7],
  otherDetails: { work: "Software Developer", exp: "5 years" },
};
console.log(obj);
console.log(obj.otherDetails);

// Second Way
let person = {};
person.name = "Abhishek";
person.age = 26;
person.address = "Odisha";
person.favColor = "lightblue";
person.favoriteNumbers = [1, 7, 9];
person.otherDetails = {
  work: "Software Developer",
  exp: "5 years",
};
console.log(person);
console.log(person.favColor);

person.favColor = "green";
console.log(person);

// Map Datastructure
let map = new Map();
map.set("name", "Abhishek");
map.set("age", "26");
map.set("favNumbers", [1345, 67898]);

console.log(map);
console.log(map.size);

map.delete("favNumbers");
console.log(map);

console.log(map.get("name"));
