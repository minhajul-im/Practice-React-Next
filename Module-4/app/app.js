const url = "https://fakestoreapi.com/products";

const getApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    showDisplay(data);
  } catch (err) {
    console.log(err);
  }
};

getApi(url);

const showDisplay = (carts) => {
  carts.forEach((cart) => {
    console.log(cart);
    const getCartSec = document.querySelector(".cart-section");

    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <h2>${cart?.id}</h2>
    `;

    getCartSec.appendChild(createDiv);
  });
};
