export const validation = (email, password) => {
  let isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  let isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) return "Email is not valid!";
  if (!isPassword) return "Password is not valid!";

  console.log(isEmail, isPassword);
  return null;
};
