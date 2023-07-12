const loadFeatured = async () => {
  const PRODUCT_URL = "https://course-api.com/react-store-products";
  const response = await fetch(PRODUCT_URL);
  const data = await response.json();
  const featured = data.slice(0, 3);
  let featuredProducts = document.getElementById("featured-products");
  featured.map((product) => {
    console.log(product);
    let featuredProduct = document.createElement("div");
    featuredProduct.className = "featured-product";
    featuredProduct.innerHTML = `
    <img src = ${product.image} alt=${product.name} onClick = "{AddToCart(this.parentNode.querySelector('p:first-child').textContent)}"></img>
    `;
    let featuredProductFooter = document.createElement("div");
    featuredProductFooter.className = "featured-product-footer ";
    featuredProductFooter.innerHTML = `
    <p style="text-transform: capitalize">${product.name}</p>
    <p>PKR. ${((product.price / 100) * 278).toFixed(2)}</p>`;
    featuredProduct.append(featuredProductFooter);
    featuredProducts.appendChild(featuredProduct);
  });
};

const AddToCart = (name) => {
  const product = data.find((product) => product.name === name);
  if (product) cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

document.addEventListener("DOMContentLoaded", loadFeatured);
