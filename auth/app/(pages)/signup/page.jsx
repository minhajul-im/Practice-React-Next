"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const init = { name: "", email: "", password: "" };

const Signup = () => {
  const route = useRouter();
  const [error, setError] = React.useState("");
  const [inputState, setInputState] = React.useState({ ...init });

  const { name, email, password } = inputState;

  const handleChange = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setError("");

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    if (name.length === 0 && email === 0 && password === 0) {
      setError("All files are exists!");
      return;
    }

    try {
      const response = await axios.post("/api/users/signup", inputState);
      route.push("/login");
      console.log("signup successfully from singup ui-page!", response.data);
      setInputState(init);
    } catch (error) {
      console.log("ERROR FROM SIGNUP UI-PAGE!", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="signup_page_style">
      <div className="signup_div_style">
        <h1>Signup</h1>

        <div className="input_button_div_style">
          <input
            className="input"
            type="text"
            placeholder="name"
            value={name}
            name="name"
            onChange={handleChange}
            onFocus={handleFocus}
          />

          <input
            className="input"
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
            onFocus={handleFocus}
          />

          <input
            className="input"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
            onFocus={handleFocus}
          />

          <button className="button" onClick={handleSubmitButton}>
            Signup
          </button>
        </div>

        {error && <h6 className="error_text_style">{error}</h6>}

        <div className="login_signup_text_style">
          <p>you have already account</p>
          <Link className="link_login_signup_style" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
