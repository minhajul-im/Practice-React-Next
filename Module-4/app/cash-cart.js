import { getId } from "./get-id.js";

const items = [1];

export const cashCart = (_id, title, category, price) => {
  items.forEach((_item) => {
    const div = document.createElement("div");
    div.classList.add(
      "d-flex",
      "justify-content-around",
      "align-baseline",
      "py-2"
    );

    div.innerHTML = `
        <h5>${title}</h5>
        <p class="fst-italic"> ${category}</p>
        <h5><span><i class="fa-solid fa-minus curPointer"></i></span> <span>0</span> <span><i class="fa-solid fa-plus curPointer"></i></span> </h5>
        <h5>$ <span>${price}</span></h5>
        <p><i class="fa-solid fa-trash-can curPointer text-danger"></i></p>
        `;

    getId("cart-cash-section").appendChild(div);
  });
};
