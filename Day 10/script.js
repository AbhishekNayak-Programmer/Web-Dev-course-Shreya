let a = 19;
let b = 20;

a += b; // a = a + b
console.log(a);

a = 19;
b = 10;

a *= b; // a = a * b
console.log(a);

let box = document.querySelector(".box1");
box = document.querySelector(".box2");

console.log(box);

console.log(9 <= 10);
console.log(9 >= 10);
console.log(9 == 9);
console.log(9 === "9");

let wake = true;

if (wake) {
  console.log("I will do the class");
} else {
  console.log("I will not do the class");
}

let product = "Pen";

if (product === "Pencil") {
  console.log("Redirect to pencil page");
} else if (product === "Book") {
  console.log("Redirect to book page");
} else if (product === "Pen") {
  console.log("Redirect to pen page");
} else {
  console.log("Product Not Found!");
}

switch (product) {
  case "Pencil":
    console.log("Redirect to pencil page");
    break;

  case "Book":
    console.log("Redirect to book page");
    break;

  case "Pen":
    console.log("Redirect to pen page");
    break;

  default:
    console.log("Product Not Found!");
    break;
}

// Print from 1 to 10
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

// Print all the even numbers from 1 to 100
for (let num = 1; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// Print all the odd numbers from 1 to 100
for (let num = 1; num <= 100; num++) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}
