"use client";

import { useRef, useState } from "react";
import { redirect, useRouter } from "next/navigation";

const Login = () => {
  const refEmail = useRef(null);
  const refPass = useRef(null);
  const route = useRouter();

  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.email === "hello@minhaj.com" && input.password === "12345") {
      console.log(input);
      route.push("/profile");
    } else {
      route.push("/");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input.email}
        onChange={handleChange}
        // ref={refEmail}
        className="py-1 px-2 block rounded my-2 text-purple-600"
        type="email"
        name="email"
        required
        placeholder="Email"
      />
      <input
        value={input.password}
        onChange={handleChange}
        // ref={refPass}
        className="py-1 px-2 block rounded my-2 text-purple-600"
        type="password"
        name="password"
        required
        placeholder="Password"
      />
      <input
        type="submit"
        value="Submit"
        className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      />
    </form>
  );
};

export default Login;
