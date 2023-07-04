import { getId } from "./get-id.js";
import { deliveryAndTaxCharge } from "./delivery-tax.js";
import { totalTaka } from "./total-taka.js";
import { itemCountMinus, totalProductsMinus } from "./count-minus.js";

// delete history
export const deleteHistory = (id, price) => {
  let btn = document.querySelector(`.delete-history[data-id="${id}"]`);
  btn.addEventListener("click", () => {
    const productPrice = getId("price").innerText;
    const convertNumber = parseFloat(productPrice);

    const convertNumPrice = parseFloat(price);

    const restPrice = convertNumber - convertNumPrice;

    getId("price").innerText = restPrice.toFixed(2);

    // delete clear data set all
    getId(`${id}`).innerHTML = "";

    // delivery  & tax charge minus
    deliveryAndTaxCharge();

    // total taka minus
    totalTaka();

    // notification count minus
    itemCountMinus();

    // product count minus
    totalProductsMinus();
  });
};
