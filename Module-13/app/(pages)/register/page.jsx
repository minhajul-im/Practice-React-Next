"use client";

import Link from "next/link";
import React, { useState } from "react";

const init = { name: "", email: "", password: "" };

const Register = () => {
  const [error, setError] = useState("");
  const [state, setState] = useState({ ...init });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setError("");
  };

  const { name, email, password } = state;

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary!");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) {
        // const form = e.target;
        // form.reset();
        console.log("Your registration failed!");
      } else {
        setState(init);
      }
    } catch (e) {
      console.log("Error during the Registration" + e);
    }
  };

  return (
    <div className="login_register_style">
      <div className="form_div_style">
        <h1>Register</h1>
        <form onSubmit={handleSubmitButton}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={handleChange}
            onFocus={handleFocus}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            onFocus={handleFocus}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            onFocus={handleFocus}
          />

          <button type="submit">submit</button>
        </form>

        {error && <h6 className="error_style">{error}</h6>}

        <div className="form_text">
          <p>you have already account</p>
          <Link className="form_link" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
