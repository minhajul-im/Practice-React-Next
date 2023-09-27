"use client";

import { Subscribe } from "@/utilities/subcribeFunction";

const SubscribeSection = () => {
  const { input, handleOnChange, handleSubmitButton } = Subscribe();

  return (
    <div className="hero py-20 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <p className="font-semibold text-green-500">SUBSCRIBES</p>
          <h1 className="text-3xl font-bold py-4">
            Lorem ipsum dolor dolor dolor!
            <br /> adipisicing elit.
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat!
            <br />
            In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="bg-white border-red-300 border-2 flex rounded-xl">
            <input
              type="email"
              value={input}
              onChange={handleOnChange}
              placeholder="Please Enter Your Email!"
              className="input outline-none focus:outline-none w-full text-red-800 font-semibold bg-white"
            />
            <button
              onClick={handleSubmitButton}
              className="py-2 px-7 m-[2px] bg-red-600 text-white  rounded-xl text-xs font-bold border-2 border-red-600 hover:bg-white hover:text-red-600"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
