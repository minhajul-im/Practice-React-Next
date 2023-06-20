// 14.AJAX Get Request:

// a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".
const getRequest = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// button
document.getElementById("requestId").addEventListener("click", () => {
  getRequest(`https://jsonplaceholder.typicode.com/posts`);
});

// 15.AJAX Post Request:

// a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".

// b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.
function sendPostRequest() {
  const url = "https://api.example.com/submit";

  const data = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
