const addToCart = (id) => {
  console.log(id);
};

export const btnEvent = () => {
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id);
    });
  });
};
