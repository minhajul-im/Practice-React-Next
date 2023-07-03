import { getId } from "./get-id.js";

export const clearCash = getId("clear-cash").addEventListener("click", () => {
  getId("total-Products").innerText = "00";

  getId("price").innerText = "00";

  getId("delivery-charge").innerText = "00";

  getId("total-tax").innerText = "00";

  getId("total").innerText = "00";
});
