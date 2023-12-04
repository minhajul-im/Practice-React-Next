import { useRef, useState } from "react";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { isEmail, isName, isPassword } from "../utilities/validation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Form() {
  const [error, setError] = useState("");
  const [isSignUp, setSingUp] = useState(false);

  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggle = () => {
    setSingUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      const nameMgs = isName(name.current.value);
      if (nameMgs) return setError(nameMgs);
    }

    const emailMgs = isEmail(email.current.value);
    const passwordMgs = isPassword(password.current.value);

    if (emailMgs) return setError(emailMgs);
    if (passwordMgs) return setError(passwordMgs);

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          userCredential.user;
          navigate("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setError(errorCode + "|" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          userCredential.user;

          navigate("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setError(errorCode + "|" + errorMessage);
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 py-10 max-w-md mx-auto bg-white shadow-2xl rounded px-8 mb-4"
    >
      <h1 className="text-2xl font-bold text-center">
        {isSignUp ? "Sign up" : "Sign in"}
      </h1>

      {isSignUp && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            ref={name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Name"
          />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          ref={email}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="example@example.com"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          ref={password}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="******************"
        />
        {isSignUp && (
          <p className="text-gray-600 text-xs italic">
            Choose a strong password.
          </p>
        )}
      </div>
      {error && <p className="text-red-600 text-xs italic pb-2">{error}</p>}

      <div className="flex w-full flex-col">
        <button
          className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {isSignUp ? "Sign up" : "Sign in"}
        </button>
      </div>
      <p className="mt-8">
        You have {isSignUp ? "already" : "no"} account!
        <span
          className="font-semibold cursor-pointer ms-4 underline"
          onClick={handleToggle}
        >
          {isSignUp ? "Sing in" : "Sing up"}
        </span>
      </p>
    </form>
  );
}
