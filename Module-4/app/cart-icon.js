import { getId } from "./get-id.js";

export const cartIconClick = getId("icon").addEventListener("click", () => {
  getId("cart-icon").style.display = "block";
});
