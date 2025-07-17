// Split Method, Reverse Method, Join Method, Slice Method, Splice Method, Includes Method, To Lowercase,To Uppercase,SetTimeOut, SetInterval, Chaning Methods in Arrays and Strings

let str = "abc@hjkl@hdjkdl@dhjfklf";
console.log(str.split("@")); // Only for strings

let arr = ["apple", "orange", "pineapple", "guava"];
console.log(arr.reverse()); // Only for Arrays

console.log(arr.join("_______")); // Only for Arrays

console.log(str.slice(5));
console.log(str.slice(4, 8)); // Only for Arrays and strings

console.log(arr.slice(2));
console.log(arr.slice(1, 3)); // Only for Arrays and strings

console.log(arr);
arr.splice(1, 2); // Only for Arrays
console.log(arr);

// Only for Arrays and strings
let selectedNames = ["Priya", "Abhishek", "Adarsh", "Rohit"];
console.log(selectedNames.includes("Priya"));

let email = "webcoder@gmail.com";
console.log(email.includes("@"));
console.log(email.includes("."));

if (email.includes("@") && email.includes(".")) {
  console.log("Valid Email Address");
} else console.log("Show Error to User");

// Only for strings
let myName = "Abhishek";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// setTimeout(() => {
//   console.log("10 Seconds Done");
//   alert("10 Seconds Done!");
// }, 1000000000000);

// setInterval(() => {
//   let date = new Date();
//   let hour = date.getHours(),
//     min = date.getMinutes(),
//     seconds = date.getSeconds();
//   console.log(`${hour} : ${min} : ${seconds}`);
// }, 10000000);

// Chaning Method in Strings
let s = "gdhdjd&hduhd&hbhdhd&hdbhdjdh))))))0";
console.log(s.split("&").reverse().join("$$$$$"));

// Chaning Method in Arrays
arr = [1, 2, 3, 4, 5];
console.log(arr.map((el) => el * 2).filter((el) => el >= 8));
