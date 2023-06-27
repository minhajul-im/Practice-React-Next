// 7.JS Common Events:

// Implement a webpage with the following functionality:

// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.
const message = () => {
  //alert message
  document.addEventListener("click", () => {
    alert("If  you got it, click the okay button");
  });

  //confirm message return true or false
  document.addEventListener("click", () => {
    const result = confirm(
      "if you agree with me click okay button otherwise click cancel"
    );

    document.write(result);
  });

  // b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
  document.addEventListener("keydown", (e) => {
    // keyCode use for older browser && which use for modern browser
    alert(`Key Code: => ${e.keyCode || e.which}`);
  });
};

// common get id or class
const getHtmlDoc = (idClass) => document.querySelector(idClass);

// c. When the user moves the mouse over an image, change the image source to another image of your choice.

setTimeout(() => {
  let image = getHtmlDoc("#imgId");

  image.addEventListener("mouseover", () => {
    image.style.transitionDuration = "1s";
    image.style.borderRadius = "50%";
    image.src = "./Minhajul.jpg";
  });
}, 200);

// 8.HTML DOM Document:

// a. Create a webpage with a button and a paragraph element.
const getDiv = getHtmlDoc("#divId");
const btn = document.createElement("button");
btn.textContent = "Change P-tag";
btn.classList.add("btn-click");

// b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.
const changeBtn = () => {
  getHtmlDoc(".p-tag").innerHTML = `I can able to change`;
};
btn.onclick = changeBtn;

getDiv.appendChild(btn);
