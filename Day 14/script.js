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

// Homework
// 1. Implement dblclick and show a aleart with some message
