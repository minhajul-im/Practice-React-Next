"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const route = useRouter();

  const Home = () => {
    route.push("../home");
    // route.refresh();
  };

  return (
    <div>
      <h1>Hello Register</h1>
      <button
        className="my-6 px-4 py-2 border border-spacing-1 bg-red-300 rounded-sm"
        // onClick={Home}
      >
        got to home
      </button>
    </div>
  );
};

export default Register;
