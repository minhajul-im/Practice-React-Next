import React from "react";

export default function Form() {
  return (
    <div className="w-3/12 bg-green-800/50 text-slate-200 py-8 px-6">
      <h1 className="font-bold text-3xl py-6 mb-4 text-center">Sign up</h1>
      <div className="flex gap-4 flex-col">
        <input
          className="outline-none py-2 px-4 border border-gray-600 rounded w-full focus:border focus:border-white bg-gray-500"
          type="text"
          placeholder="name"
        />
        <input
          className="outline-none py-2 px-4 border border-gray-600 rounded w-full focus:border focus:border-white bg-gray-500"
          type="email"
          placeholder="email"
        />
        <input
          className="outline-none py-2 px-4 border border-gray-600 rounded w-full focus:border focus:border-white bg-gray-500"
          type="password"
          placeholder="password"
        />
        <button className="py-2 px-4 bg-red-600 text-white font-bold border border-white rounded">
          Sign in
        </button>
      </div>

      <p className="font-semibold py-4">
        You have already account! <span>Sign in</span>
      </p>
    </div>
  );
}
