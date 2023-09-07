"use client";

import Link from "next/link";
import ReusableFunctionality from "../utilities/ReusableFunctionality";
// import LoginFunctionality from "../utilities/LoginFunctionality";

const Login = () => {
  const {
    email,
    error,
    password,
    handleFocus,
    handleChange,
    handleSubmitButton,
    // } = LoginFunctionality();
  } = ReusableFunctionality("api/login", "/dashboard");

  return (
    <div className="login_register_style">
      <div className="form_div_style">
        <h1>Login</h1>

        <form onSubmit={handleSubmitButton}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onFocus={handleFocus}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onFocus={handleFocus}
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
