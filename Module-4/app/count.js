import { getId } from "./get-id.js";

// dynamic function set inner text
const innerTextSet = (id) => {
  let itemsCount = getId(id).innerText;
  let strCount = parseInt(itemsCount);
  let count = strCount + 1;
  getId(id).innerText = count;
};

//notification counter
export const itemCount = () => {
  innerTextSet("badge");
};

// total product counter
export const totalProducts = () => {
  innerTextSet("total-Products");
};
