import { products } from "../data.js";
import productsTemplate from "./templates/products.hbs";

const area = document.querySelector(".area");
const addBtn = document.querySelector(".add-btn");
const nameInput = document.querySelector(".name-input");
const priceInput = document.querySelector(".price-input");
const descriptionInput = document.querySelector(".description-input");
const urlInput = document.querySelector(".url-input");

let productList = [...products];

function update() {
  area.innerHTML = productsTemplate({ products: productList });
}
update();

addBtn.addEventListener("click", () => {
  if (
    !nameInput.value ||
    !priceInput.value ||
    !descriptionInput.value ||
    !urlInput.value
  )
    return;

  const newProduct = {
    id: Date.now(),
    name: nameInput.value,
    price: priceInput.value,
    description: descriptionInput.value,
    image: urlInput.value,
  };

  productList.push(newProduct);
  update();

  nameInput.value = "";
  priceInput.value = "";
  descriptionInput.value = "";
  urlInput.value = "";
});

area.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const id = Number(e.target.dataset.id);
    productList = productList.filter((product) => product.id !== id);
    update();
  }
});
