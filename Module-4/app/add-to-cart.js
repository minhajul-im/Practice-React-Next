import { cashCart } from "./cash-cart.js";
import { itemCount } from "./count.js";

const getId = (id) => document.getElementById(id);

export const btnEvent = () => {
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      getId("badge").style.display = "block";

      itemCount();

      // get product all dataset
      const id = btn.dataset.id;
      const title = btn.dataset.title;
      const category = btn.dataset.category;
      const price = btn.dataset.price;

      cashCart(id, title, category, price);
    });
  });
};
