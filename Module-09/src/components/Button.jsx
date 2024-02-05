import React from "react";

export default function Button({ children }) {
  return (
    <button className='py-2 px-5 cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 font-semibold inline-block mx-2'>
      {children}
    </button>
  );
}
