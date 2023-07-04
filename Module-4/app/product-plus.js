import { getId } from "./get-id.js";
import { setInnerText } from "./count-plus.js";

export const plusBtn = (id, price) => {
  let btn = document.querySelector(`.plus-item[data-id="${id}"]`);

  btn.addEventListener("click", () => {
    let count = document.querySelector(
      `.item-counter-product[data-id="${id}"]`
    );

    let countId = count.dataset.id;

    if (countId == id) {
      let x = document.querySelector(`.item-counter-product[data-id="${id}"]`);
      let y = x.innerHTML;
      let z = parseInt(y);
      let result = z + 1;
      x.innerHTML = result;
    }
  });
};
