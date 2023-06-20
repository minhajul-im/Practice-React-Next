/**
 * @param {COMMON FUNCTION GET ID OR CLASS}
 */
const getHtmlDoc = (id) => document.querySelector(id);

// 10.DOM Manipulate CSS Class:

// b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. The "highlight" class should change the background color of the paragraph to yellow.
getHtmlDoc("#bg-change-btn").addEventListener("click", () => {
  getHtmlDoc(".bg-para").style.backgroundColor = "yellow";
});

// 11.Create Element & Append Element:

// b. Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5) and appends them to the unordered list.

const appendChildFunc = () => {
  let ulItems = getHtmlDoc(".ul-items");

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = `${i} - item list`;
    li.style.listStyle = "none";
    li.style.textAlign = "center";

    ulItems.appendChild(li);
  }
};
appendChildFunc();

// 12.DOM Change Attribute Value:

// b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice.
getHtmlDoc("#change-picture-btn").addEventListener("click", () => {
  let img = getHtmlDoc(".img");
  img.src = "./Minhajul.jpg";
  img.style.height = "350px";
  img.style.wight = "350px";
  img.style.borderRadius = "50%";
});

// 13.DOM Query Selector:

// b. Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red.

// const para = document.querySelectorAll(".para1");
const changeColor = () => {
  const para = document.getElementsByTagName("p");
  for (let i = 0; i < para.length; i++) {
    para[i].style.color = "red";
  }
};
changeColor();
