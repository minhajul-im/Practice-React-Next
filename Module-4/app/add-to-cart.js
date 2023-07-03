import { cashCart } from "./cash-cart.js";
import { itemCount, totalProducts } from "./count.js";
import { getId } from "./get-id.js";

export const btnEvent = () => {
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      getId("badge").style.display = "block";

      itemCount();
      totalProducts();

      // get product all dataset
      const id = btn.dataset.id;
      const title = btn.dataset.title;
      const category = btn.dataset.category;
      const price = btn.dataset.price;

      cashCart(id, title, category, price);
    });
  });
};
