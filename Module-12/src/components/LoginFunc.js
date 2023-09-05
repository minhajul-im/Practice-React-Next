"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const init = {
  email: "example@gmail.com",
  pass: "12345",
};

const LoginFunc = () => {
  const router = useRouter();
  const [state, setState] = useState({ init });

  const handleChangeOnInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSubmitButton = async (e) => {
    e.preventDefault();

    if (state.email.length === 0) {
      alert("Email Required");
    } else if (state.pass.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(state) };

      const response = await fetch("/api/login", config);
      const json = await response.json();

      if (json["status"] === true) {
        router.replace("/dashboard");
      } else {
        alert(json["message"]);
      }
    }
  };

  return {
    state,
    handleChangeOnInput,
    handleChangeSubmitButton,
  };
};

export default LoginFunc;
