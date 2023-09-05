"use client";

import LoginFunc from "@/components/LoginFunc";

const Login = () => {
  const { state, handleChangeOnInput, handleChangeSubmitButton } = LoginFunc();

  return (
    <div>
      <h1 className="text-red-600 text-3xl font-mono font-bold p-10">
        Hello Home Page
      </h1>
      <form
        onSubmit={handleChangeSubmitButton}
        className="grid grid-flow-row gap-4"
      >
        <input
          onChange={handleChangeOnInput}
          type="email"
          placeholder="email"
          name="email"
          value={state.email}
        />
        <input
          onChange={handleChangeOnInput}
          type="password"
          placeholder="password"
          name="pass"
          value={state.pass}
        />
        <button
          className="py-2 px-4 border border-3 border-gray-600
           bg-black text-white rounded-sm w-20"
        >
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
