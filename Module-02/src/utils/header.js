import { useState } from "react";

const header = () => {
  const [btnText, setBtnText] = useState("Login");
  const handleOnClick = () => {
    if (btnText === "Login") {
      alert("Are you want to Logout!");
      setBtnText("Logout");
    } else {
      alert("Are you want to Login!");
      setBtnText("Login");
    }
  };
  return {
    btnText,
    handleOnClick,
  };
};

export default header;
