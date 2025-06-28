import { products, cameras } from "./products.js";
const productList = document.querySelector("#product_list");

console.log(cameras);

products.map((el, ind) => {
  productList.insertAdjacentHTML(
    "beforeend",
    `
    <div class="wow productCard animate__animated animate__rotateIn">
        <img src=${el.imgUrl} alt=${el.name} />
        <h3>${el.name}</h3>
        <p>${el.price}</p>
        <button>Add to cart</button>
    </div>
`
  );
});
