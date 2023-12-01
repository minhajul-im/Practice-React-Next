import { useCallback, useRef, useState } from "react";
import Input from "./Input";

import {
  HandleToggleFunction,
  isEmailAndIsPassword,
} from "../../utilities/formFunction";

export default function Form() {
  const [error, setError] = useState("");
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const { isSignUp, handleToggleSignInSignUp } = HandleToggleFunction();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checked = isEmailAndIsPassword(
      email.current.value,
      password.current.value
    );
    setError(checked);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/12 bg-green-800/50 text-slate-200 py-8 px-6"
    >
      <h1 className="font-bold text-3xl py-6 mb-4 text-center">
        {isSignUp ? "Sign up" : "Sign in"}
      </h1>
      <div className="flex gap-4 flex-col">
        {isSignUp && (
          <Input type={"name"} placeholder={"name"} inputValue={name} />
        )}
        <Input type={"email"} placeholder={"email"} inputValue={email} />
        <Input
          type={"password"}
          placeholder={"password"}
          inputValue={password}
        />

        {error && (
          <p className="text-red-600 italic font-semibold text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="py-2 px-4 bg-red-600 text-white font-bold border border-white rounded"
        >
          {isSignUp ? "Sign up" : "Sign in"}
        </button>
      </div>

      <p className="font-semibold py-4">
        You have {isSignUp ? "" : "no"} already account!
        <span
          className="cursor-pointer ps-4 text-blue-500 underline"
          onClick={handleToggleSignInSignUp}
        >
          {isSignUp ? "Sign in" : "Sign up"}
        </span>
      </p>
    </form>
  );
}
