"use client";

import Link from "next/link";

import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    if (!state.email && !state.password) {
      setError("error");
    } else console.log(state);
  };

  return (
    <div className="login_register_style">
      <div className="form_div_style">
        <h1>Register</h1>

        <form onSubmit={handleSubmitButton}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />

          <button type="submit">submit</button>
        </form>

        {error && <h6 className="error_style">{error}</h6>}

        <div className="form_text">
          <p>you have no account</p>
          <Link className="form_link" href={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
