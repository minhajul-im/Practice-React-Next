import { useRef, useState } from "react";
import Input from "./Input";
import { validation } from "../utilities/validation";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let checked = validation(email.current.value, password.current.value);
    setError(checked);
    navigate("/browse");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/12 bg-indigo-600/50 text-slate-200 py-8 px-6 rounded shadow-md"
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
        {error && <p className="text-xs font-semibold text-red-600">{error}</p>}
        <button
          type="submit"
          className="py-2 px-4 bg-red-600 text-white font-bold border border-white rounded"
        >
          {isSignUp ? "Sign up" : "Sign in"}
        </button>
      </div>

      <p className="font-semibold py-6">
        You have {isSignUp ? "already" : "no"} account!
        <span
          onClick={handleToggle}
          className="text-purple-950 underline ps-3 cursor-pointer"
        >
          {isSignUp ? "Sign in" : "Sign up"}
        </span>
      </p>
    </form>
  );
}
