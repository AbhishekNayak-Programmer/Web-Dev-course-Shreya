const heading = document.querySelector(".abc");

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 80) {
    // alert("Sign in now");
    heading.innerText = "Abhishek Nayak";
    heading.style.color = "crimson";
    heading.style.textAlign = "center";
  }
  if (window.scrollY < 80) {
    heading.innerText = "ABC";
    heading.style.color = "blue";
    heading.style.textAlign = "right";
  }
});

// Class
class Car {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.currentSpeed = 0;
  }

  // Functions
  carDetails() {
    console.log(
      `This car brand is ${this.name}. The color of this car is ${this.color}
        and my highest speed is ${this.speed}
      `
    );
  }

  brake() {
    this.currentSpeed = this.currentSpeed - 5;
    console.log("After Brake : ", this.currentSpeed);
  }

  accelerate() {
    this.currentSpeed = this.currentSpeed + 50;
    console.log("After Accelertion : ", this.currentSpeed);
  }

  advancedBraking(brakeNum) {
    this.currentSpeed = this.currentSpeed - brakeNum;
    console.log("After Advanced Brake : ", this.currentSpeed);
  }
}

const car1 = new Car("Ford", "White", 220);
car1.carDetails();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.advancedBraking(35);

const car2 = new Car("BMW", "Black", 300);
car2.carDetails();
car2.accelerate();
car2.accelerate();
car1.brake();

class ElectricCar extends Car {
  constructor(name, color, speed, batteryRange) {
    super(name, color, speed);
    this.batteryRange = batteryRange;
  }

  charge() {
    console.log("Charging car for range ", this.batteryRange);
  }

  start() {
    console.log("Power Start");
  }
}

const eleCar = new ElectricCar("TATA", "Purple", 200, 500);
eleCar.carDetails();
eleCar.start();
eleCar.charge();

// Callback function
function greet() {
  function wakeUp() {
    console.log("Wake Up Abhishek");
  }
  console.log("Good Night Abhishek");
  wakeUp();
}

greet();

// Map Method
let arr = [1, 2, 3, 4, 5];
let ans = arr.map((el, ind) => el * 2);
console.log(ans);

// Filter Method
arr = ["Samsung", "Nokia", "Microsoft", "Vivo", "Oppo", "Apple"];
let result = arr.filter((el, ind) => el === "Microsoft");
console.log(result);

// Reduce Method
arr = [1, 2, 3, 4, 5];
let price = arr.reduce((acc, el, ind) => acc + el, 0);
console.log(price);

// JSON Object
let person = {
  name: "Abhishek",
  age: 26,
};

// Array of Objects
let products = [
  { name: "Samsung s25", price: 120000, rating: 4.5, deliveryTime: 2 },
  { name: "Oppo F40", price: 34000, rating: 2.6, deliveryTime: 1 },
  { name: "Iphone 16", price: 125000, rating: 3.8, deliveryTime: 3 },
];
