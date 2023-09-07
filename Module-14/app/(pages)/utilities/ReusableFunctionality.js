"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const init = { name: "", email: "", password: "" };

const ReusableFunctionality = (apiUrl, pageUrl) => {
  const route = useRouter();
  const [error, setError] = useState("");
  const [state, setState] = useState({ ...init });

  const { name, email, password } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setError("");

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    if ((!name && !email && !password) || (!email && !password)) {
      setError("All fields are necessary!");
      return;
    }

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (res.ok) {
        route.push(pageUrl);
        console.log(state);
        setState(init);
      } else {
        setError("Wrong Email or Password Check!!");
      }
    } catch (e) {
      console.log("Login Failed!!");
    }
  };

  return {
    email,
    error,
    password,
    handleFocus,
    handleChange,
    handleSubmitButton,
  };
};

export default ReusableFunctionality;
