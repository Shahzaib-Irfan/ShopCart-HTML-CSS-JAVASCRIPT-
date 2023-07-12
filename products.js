let cart = [];
let data = [];
const loadFeatured = async () => {
  const PRODUCT_URL = "https://course-api.com/react-store-products";
  const response = await fetch(PRODUCT_URL);
  data = await response.json();
  let Products = document.getElementById("products");
  data.map((product) => {
    let Product = document.createElement("div");
    Product.className = "product";
    Product.innerHTML = `
    <img src = ${product.image} alt=${product.name} onClick = "{AddToCart(this.parentNode.querySelector('p:first-child').textContent)}"></img>
    `;
    let ProductFooter = document.createElement("div");
    ProductFooter.className = "product-footer";
    ProductFooter.innerHTML = `
    <p style="text-transform: capitalize">${product.name}</p>
    <p>PKR. ${((product.price / 100) * 278).toFixed(2)}</p>`;
    Product.appendChild(ProductFooter);
    Products.appendChild(Product);
  });
};

const AddToCart = (name) => {
  const product = data.find((product) => product.name === name);
  if (product) cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

document.addEventListener("DOMContentLoaded", loadFeatured);
