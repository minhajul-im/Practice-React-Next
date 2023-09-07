"use client";

import Link from "next/link";
import ReusableFunctionality from "../utilities/ReusableFunctionality";

const Register = () => {
  const {
    name,
    email,
    error,
    password,
    handleFocus,
    handleChange,
    handleSubmitButton,
  } = ReusableFunctionality("api/register", "/login");

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
