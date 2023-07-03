import { data } from "./product.js";
import { showDisplay } from "./cart.js";
import { cartIconClick } from "./cart-icon.js";
import { btnEvent } from "./add-to-cart.js";
import { clearCash } from "./clear-cash.js";

// show display all products
showDisplay(data);

// add to cart
btnEvent();

// cart icon
cartIconClick;

//clear cash
clearCash;
