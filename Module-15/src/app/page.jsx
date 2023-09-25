"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const route = useRouter();
  const init = { name: "", email: "", password: "" };
  const [inputState, setInputState] = React.useState({ ...init });
  const { name, email, password } = inputState;

  const handleOnChange = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const handleButton = async () => {
    console.log({ email, password });
    if (email === "" && password === "") {
      alert("PLEASE GIVE YOU EMAIL & PASSWORD!");
    } else {
      const callbackUrl = "/profile";
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl,
      });
      if (!res?.error) {
        route.replace(callbackUrl);
        setInputState(init);
      }
    }
  };

  return (
    <div className="signup_page_style">
      <div className="signup_div_style">
        <h1>Hello Singup</h1>
        <div className="input_button_div_style">
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleOnChange}
          />
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleOnChange}
          />
          <button onClick={handleButton} className="button">
            Singup
          </button>

          <button
            onClick={() => signIn("github")}
            className="button bg-gray-300"
          >
            login with github
          </button>
          <button
            onClick={() => signIn("google")}
            className="button bg-green-600"
          >
            login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
