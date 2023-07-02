const getId = (id) => document.getElementById(id);

export const cartIconClick = () => {
  getId("icon").addEventListener("click", () => {
    getId("cart-icon").classList.remove("cart-hidden");
  });
};
