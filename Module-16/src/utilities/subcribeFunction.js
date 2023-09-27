"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export const Subscribe = () => {
  const [input, setInput] = useState("");
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmitButton = () => {
    console.log(input);

    toast.success("Successfully Subscribe!");
    setInput("");
  };

  return {
    input,
    handleOnChange,
    handleSubmitButton,
  };
};
