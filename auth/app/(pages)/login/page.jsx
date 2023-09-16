"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const init = { email: "", password: "" };

const Login = () => {
  const route = useRouter();
  const [error, setError] = React.useState("");
  const [inputState, setInputState] = React.useState({ ...init });

  const { email, password } = inputState;

  const handleChange = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };
  const handleFocus = () => setError("");

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    if (email === 0 && password === 0) {
      setError("All files are exists!");
      return;
    }

    try {
      const response = await axios.post("/api/users/login", inputState);
      console.log("signup successfully from login ui-page!", response.data);
      toast.success("login success!");
      route.push("/profile");
      setInputState(init);
      setInputState(init);
    } catch (error) {
      console.log("ERROR FROM LOGIN UI-PAGE!", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="signup_page_style">
      <div className="signup_div_style">
        <h1>Login</h1>

        <div className="input_button_div_style">
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
            Login
          </button>
        </div>

        {error && <h6 className="error_text_style">{error}</h6>}

        <div className="login_signup_text_style">
          <p>you have no account</p>
          <Link className="link_login_signup_style" href={"/signup"}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
