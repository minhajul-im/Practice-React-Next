import React from "react";

export default function Input({ type, placeholder, inputValue }) {
  return (
    <input
      className="outline-none py-2 px-4 border border-gray-600 rounded w-full focus:border focus:border-purple-700 bg-slate-300 text-black"
      type={type}
      placeholder={placeholder}
      ref={inputValue}
    />
  );
}
