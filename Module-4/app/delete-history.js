import { getId } from "./get-id.js";

// delete history
export const deleteHistory = (id, price) => {
  let btn = document.querySelector(`.delete-history[data-id="${id}"]`);
  btn.addEventListener("click", () => {
    const productPrice = getId("price").innerText;
  });
};
