import { cashCart } from "./cash-cart.js";
import { itemCount, totalProducts } from "./count.js";
import { getId } from "./get-id.js";
import { productTaka } from "./product-taka.js";
import { deliveryAndTaxCharge } from "./delivery-tax.js";

export const btnEvent = () => {
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // set notification
      getId("badge").style.display = "block";

      // notification count
      itemCount();

      //product count
      totalProducts();

      // get product all dataset
      const id = btn.dataset.id;
      const title = btn.dataset.title;
      const category = btn.dataset.category;
      const price = btn.dataset.price;

      // show cash history
      cashCart(id, title, category, price);

      //product price
      productTaka(price);

      //delivery & tax
      deliveryAndTaxCharge();
    });
  });
};
