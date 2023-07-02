const getId = (id) => document.getElementById(id);

export const itemCount = () => {
  let itemsCount = getId("badge").innerText;
  let strCount = parseInt(itemsCount);
  let count = strCount + 1;
  getId("badge").innerText = count;
};
