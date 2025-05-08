const productsContainer = document.getElementById("productsContainer");
const cartContainer = document.getElementById("cartContainer");
const feedbackElement = document.getElementById("feedback");
const totalPriceElement = document.getElementById("totalPrice");
const clearCartBtn = document.getElementById("clearCart");
const sortCartBtn = document.getElementById("sortCart");
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Phone",
    price: 20000,
  },
  {
    id: 3,
    name: "Tablet",
    price: 5000,
  },
  {
    id: 4,
    name: "SmartWatch",
    price: 1000,
  },
  {
    id: 5,
    name: "Headphones",
    price: 500,
  },
];

//let cart = [];
const cart = [];

let timerid;

clearCartBtn.addEventListener("click", clearCart);
sortCartBtn.addEventListener("click", sortByPrice);

function clearCart() {
  cart.length = 0;
  renderCartDetails();
  updateUserFeedback("Cart is cleared", "success");
}
function sortByPrice() {
  cart.sort((product1, product2) => product1.price - product2.price);
  renderCartDetails();
}

function renderProductDetails() {
  products.forEach(function (product) {
    //   const productRow = `
    //     <div class="product-row">
    //           <p>${product.name} - Rs. ${product.price}</p>
    //           <button>Add to cart</button>
    //     </div>
    //     `;
    //   productsContainer.insertAdjacentHTML("beforeend", productRow);
    const { name, price, id } = product;
    const divElement = document.createElement("div");
    divElement.className = "product-row";
    divElement.innerHTML = `
    <p>${name} - Rs. ${price}</p>
    <button onclick="addToCart(${id})">Add to cart</button>
    `;
    productsContainer.appendChild(divElement);
  });
}

function renderCartDetails() {
  cartContainer.innerHTML = "";
  cart.forEach(function (product) {
    const { name, price, id } = product;
    const divElement = document.createElement("div");
    divElement.className = "product-row";
    divElement.innerHTML = `
            <p>${name} - Rs. ${price}</p>
            <button onclick="removeFromCart(${id})">Remove</button>
            `;
    cartContainer.appendChild(divElement);
  });

  const totalprice = cart.reduce(function (acc, product) {
    return acc + product.price;
  }, 0);
  totalPriceElement.textContent = `Rs. ${totalprice}`;
}
//General procedure

// const testingBtn = document.getElementById("testing");

// testingBtn.addEventListener("click", function () {
//   console.log("Testing button clicked");
// });

// New way of writing by using onclick
// function testingBtnDetails(value) {
//   console.log("Testing button clicked by using onclick", value);
// }

function addToCart(id) {
  //console.log("addtoCart clicked", id);

  //check if the product is already added to the cart
  const isProductAvalibale = cart.some((product) => product.id === id);

  if (isProductAvalibale) {
    const productToAdd = products.find((product) => product.id === id);
    // feedbackElement.textContent = `${productToAdd.name} is already added to the cart`;
    updateUserFeedback(
      `${productToAdd.name} is already added to the cart`,
      "error"
    );
    return;
  }

  const productToAdd = products.find((product) => product.id === id);
  //console.log(productToAdd);
  cart.push(productToAdd);
  console.log(cart);
  renderCartDetails();
  //   const { name, price, id: productId } = productToAdd;

  //   const divElement = document.createElement("div");
  //   divElement.className = "product-row";
  //   divElement.innerHTML = `
  //     <p>${name} - Rs. ${price}</p>
  //     <button onclick="removeFromCart(${productId})">Remove</button>
  //     `;
  //   cartContainer.appendChild(divElement);
  //   feedbackElement.textContent = `${name} is  added to the cart`;
  updateUserFeedback(`${productToAdd.name} is added to the cart`, "success");
}

function removeFromCart(id) {
  //Below code used when we have used a filer
  //   const updatedCart = cart.filter((product) => product.id !== id);
  //   console.log(updatedCart);
  //   cart = updatedCart;
  //renderCartDetails();

  // below code will execute when used splice
  const product = cart.find((product) => product.id === id);
  const productIndex = cart.findIndex((product) => product.id === id);
  cart.splice(productIndex, 1);
  updateUserFeedback(`${product.name} is removed from the card`, "error");
  renderCartDetails();
}

function updateUserFeedback(msg, type) {
  clearTimeout(timerid);
  feedbackElement.style.display = "block";
  if (type === "success") {
    feedbackElement.style.backgroundColor = "green";
  } else {
    feedbackElement.style.backgroundColor = "red";
  }
  feedbackElement.textContent = msg;
  timerid = setTimeout(function () {
    feedbackElement.style.display = "none";
  }, 3000);
}

//rendenring products
renderProductDetails();
