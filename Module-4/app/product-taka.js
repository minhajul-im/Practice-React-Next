import { getId } from "./get-id.js";

export const productTaka = (price) => {
  setInnerText("price", price);
};

const setInnerText = (id, price) => {
  let productPrice = getId(id).innerText;
  let productPriceNum = parseFloat(productPrice);
  let priceNum = parseFloat(price);
  let count = productPriceNum + priceNum;
  getId(id).innerText = count.toFixed(2);
};
// let x = getId("price").innerText;
// let y = parseFloat(x);
// let priceStr = parseFloat(price);
// let total = y + priceStr;
// getId("price").innerText = total.toFixed(2);
