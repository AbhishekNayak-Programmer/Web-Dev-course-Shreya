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
