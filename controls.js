const productscard = [
  {
    name: "THINK DIFFERENT, BLACK T-SHIRT",
    price: 2500,
    img: "Product-0_900x.webp",
  },
  {
    name: "REBIRTH, CONTRAST STITCH",
    price: 5300,
    img: "Product-1_900x.webp",
  },
  {
    name: "OG REBIRTH, ASH HOODIE",
    price: 3800,
    img: "DeathStare-Tee_900x.webp",
  },
  {
    name: "CATACOMB DENIM JACKET",
    price: 8900,
    img: "Catacomb-Denim-Jacket-F_720x.webp",
  },
  {
    name: "DEATH STARE, ARMY GREEN T-SHIRT",
    price: 8800,
    img: "Product-2_900x.webp",
  },
  {
    name: "CATACOMB, A NAVY HALF ZIP",
    price: 7600,
    img: "Halfzip-Bluestrips-F_720x.webp",
  },
];

const cart = [];

function generateProductCard(product, index) {
  return `
    <div class="card">
      <img class="shirts-img" src="assets/${product.img}" alt="logo" />
      <div class="card-details">
        <button class="add-to-cart-button" data-index="${index}">
          <span>ADD TO CART</span>
          <img width="15" style="margin-left: 10px" height="15" src="icons8-soma-50.png" alt="plus-math--v1"/>
        </button>
        <span class="product-name">${product.name}</span>
        <span class="price">${product.price} MZN</span>
      </div>
    </div>
  `;
}

function addToCart(product) {
  const index = cart.findIndex((item) => item.name === product.name);

  if (index === -1) {
    cart.push({
      name: product.name,
      price: product.price,
      img: product.img,
      quantity: 1,
    });

    updateCartTable();
  } else {
    if (cart[index].quantity < 10) {
      cart[index].quantity++;
      updateCartTable();
    }
  }
}

function updateCartTable() {
  const cartTable = document.getElementById("cart-table");
  cartTable.innerHTML = "";

  cart.forEach((product, index) => {
    const newRow = cartTable.insertRow(index);
    const cell0 = newRow.insertCell(0);
    const cell1 = newRow.insertCell(1);
    const cell2 = newRow.insertCell(2);
    const cell3 = newRow.insertCell(3);
    const cell4 = newRow.insertCell(4);
    const cell5 = newRow.insertCell(5);

    cell0.innerHTML = `<img src="assets/${product.img}" alt="product" class="mini-product"/>`;
    cell1.innerHTML = `<input type="text" readonly name="Item${
      index + 1
    }" value="${product.name}" />`;
    cell2.innerHTML = `<input type="text" readonly name="Preço${
      index + 1
    }" value="${product.price} MZN" />`;
    cell3.innerHTML = `<input type="number" id="qty-input" min="0" max="10" name="Quantidade${
      index + 1
    }" value="${product.quantity}" onchange="updateQuantity(${index})"/>
    `;
    cell4.innerHTML = `<input type="text" class="input-price" readonly name="Total${
      index + 1
    }" value="${product.price * product.quantity} MZN" />`;
    cell5.innerHTML = `<img onclick="deleterow(this)" style="margin-bottom: -2px; cursor:pointer" width="15" height="15" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/>`;
  });

  updateTotal();
}

function updateTotal() {
  const totalItemsInput = document.querySelector('input[name="TotalItems"]');
  let currentTotal = 0;

  cart.forEach((product) => {
    currentTotal += product.price * product.quantity;
  });

  totalItemsInput.value = currentTotal;
}

const productContainer = document.getElementById("product-container");

productscard.forEach((product, index) => {
  const productCard = generateProductCard(product, index);
  const div = document.createElement("div");
  div.innerHTML = productCard;
  const addToCartButton = div.querySelector(".add-to-cart-button");
  addToCartButton.addEventListener("click", () => {
    addToCart(product);
  });
  productContainer.appendChild(div);
});

function deleterow(button) {
  var row = button.parentNode.parentNode;
  var productName = row.querySelector('input[name^="Item"]').value;

  const index = cart.findIndex((item) => item.name === productName);
  if (index !== -1) {
    cart.splice(index, 1);
  }

  row.parentNode.removeChild(row);

  updateCartTable();
}

function updateQuantity(index) {
  const qtyInput = document.querySelector(
    `input[name="Quantidade${index + 1}"]`
  );
  const quantity = parseInt(qtyInput.value);

  if (quantity >= 0 && quantity <= 10) {
    cart[index].quantity = quantity;
    updateCartTable();
  } else {
    qtyInput.value = 1;
    cart[index].quantity = 1;
    updateCartTable();
  }
}

function validation() {
  if (cart.length === 0) {
    alert("Por favor selecione algum produto.");
    return false;
  }
}
