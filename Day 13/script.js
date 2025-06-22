// alert("Your Own Message!");
const btn1 = document.querySelector(".btn1");

const printSomeMessage = () => {
  console.log("I am clicked");
};

const showAlert = () => {
  alert("button is clicked");
};

btn1.addEventListener("click", showAlert);

const btn2 = document.querySelector(".btn2");
const invisibleElement = document.querySelector(".invisible");

const makeVisible = () => {
  invisibleElement.style.display = "block";
  invisibleElement.style.color = "red";
  invisibleElement.style.background = "black";
};

btn2.addEventListener("click", makeVisible);

let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let box = document.querySelector(".box");

const addUniqueClass = () => {
  box.classList.add("unique");
};

const removeUniqueClass = () => {
  box.classList.remove("unique");
};

btn3.addEventListener("click", addUniqueClass);
btn4.addEventListener("click", removeUniqueClass);

const buttonsArr = document.querySelectorAll(".my_button");

buttonsArr.forEach((el, ind) => {
  el.addEventListener("click", printSomeMessage);
});

const myBox = document.querySelector(".myBox");

myBox.addEventListener("click", () => {
  myBox.classList.toggle("myBoxStyle");
});

const readText = document.querySelector(".read_text");
const para = document.querySelector(".para");

readText.addEventListener("click", () => {
  para.classList.toggle("invisiblePara");
});

const img = document.querySelector("img");

img.addEventListener("click", () => {
  img.src = `https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg`;
});

const mybox2 = document.querySelector(".mybox2");
mybox2.addEventListener("mouseover", () => {
  mybox2.style.background = "green";
  //   alert("Please Remove Mouse Over Orchid Color Border Box");
});

mybox2.addEventListener("mouseout", () => {
  mybox2.style.background = "crimson";
});

// Keyboard Events
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "m") {
    mybox2.style.background = "purple";
  }
  if (event.key === "y") {
    mybox2.style.background = "yellow";
  }
  if (event.key === "Escape") {
    // alert("Escape is Clicked!");
    mybox2.style.display = "none";
  }
});

document.addEventListener("keyup", (event) => {
  console.log(event.key);
  if (event.key === "o") {
    mybox2.style.background = "blue";
  }
  if (event.key === "p") {
    mybox2.style.background = "black";
  }
  if (event.key === "q") {
    alert("Q is Pressed!");
  }
});
