// 9.JS DOM Working with Form Input:

// Implement JavaScript validation for the form fields:

// f. Name should not be empty and should contain only letters.

// g. Email should be a valid email address.

// h. Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.

// i. Confirm Password should match the Password field.

// j. Display appropriate error messages for invalid fields.
// Get form elements

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  const form = document.getElementById("form");

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const confirmPassword = document.getElementById("confirmPassword").value;

  // checking
  let check = true;

  //name check
  if (!name.match(/^[A-Za-z\s]+$/)) {
    check = false;
  }

  // email check
  if (
    !email.match(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    )
  ) {
    check = false;
  }

  // password check
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[0-9]/)
  ) {
    check = false;
  }

  // confirm password check
  if (password !== confirmPassword) {
    check = false;
  }

  // every thing is true then correct
  if (check) {
    alert(`Form submitted successfully`);
  } else {
    // any one mistake false
    alert(`Please gives valid name, email & password`);
  }

  // get name, email & password
  console.log(` 
    Name: ${name}| Email: ${email}| Password: ${password}| Confirm Password: ${confirmPassword}`);

  form.reset();
});
