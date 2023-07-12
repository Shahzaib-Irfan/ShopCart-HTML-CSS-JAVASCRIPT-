const products = [];

const array = JSON.parse(localStorage.getItem("cart"));

array.map((product) => products.push(product));

function generateCartPage() {
  const cartItemsBody = document.getElementById("cart-items-body");
  const totalItemsElement = document.getElementById("total-items");
  const totalPriceElement = document.getElementById("total-price");

  // Clear the existing cart items
  cartItemsBody.innerHTML = "";

  let totalItems = 0;
  let totalPrice = 0;

  // Generate cart item rows
  products.forEach((product) => {
    console.log(product);
    const { name, price } = product;
    var priceA = (price / 100) * 278;
    const quantity = 1;
    const subtotal = priceA;

    // Update the total items and price
    totalPrice += subtotal;

    // Create the cart item row
    const row = document.createElement("tr");
    const productInfoCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const quantityCell = document.createElement("td");
    const subtotalCell = document.createElement("td");

    // Create the product info section
    const productInfoDiv = document.createElement("div");
    productInfoDiv.className = "product-info";
    const image = document.createElement("img");
    image.src = product.image; // Replace with actual product image source
    image.alt = name;
    const itemDetailsDiv = document.createElement("div");
    itemDetailsDiv.className = "item-details";
    const itemName = document.createElement("h3");
    itemName.textContent = name;

    // Append elements to the product info section
    itemDetailsDiv.appendChild(itemName);
    productInfoDiv.appendChild(image);
    productInfoDiv.appendChild(itemDetailsDiv);
    productInfoCell.appendChild(productInfoDiv);

    // Set the price, quantity, and subtotal values
    priceCell.textContent = `$${priceA.toFixed(2)}`;
    subtotalCell.textContent = `$${subtotal.toFixed(2)}`;

    // Append cells to the row
    row.appendChild(productInfoCell);
    row.appendChild(priceCell);
    row.appendChild(subtotalCell);

    // Append the row to the cart items table body
    cartItemsBody.appendChild(row);
  });

  // Update the total items and price in the summary
  totalItemsElement.textContent = products.length;
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Generate the cart page when the DOM content is loaded
document.addEventListener("DOMContentLoaded", generateCartPage);
