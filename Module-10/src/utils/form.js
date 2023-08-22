"use client";
import React from "react";
import { init } from "@/db/formData";

const convertArr = (obj) =>
  Object.keys(obj).map((item) => ({ key: item, ...obj[item] }));

export const form = () => {
  const [state, setState] = React.useState({ ...init });
  const [textarea, setTextarea] = React.useState("");
  const dataSet = convertArr(state);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        ...state[e.target.name],
        value: e.target.value,
      },
    });
  };

  const handleText = (e) => {
    setTextarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = Object.keys(state).reduce((acc, cur) => {
      acc[cur] = state[cur].value;

      return acc;
    }, {});

    const user = {
      ...userData,
      mgs: textarea,
    };

    console.log(user);

    setTextarea("");
    setState(init);
  };

  return {
    dataSet,
    textarea,
    handleChange,
    handleText,
    handleSubmit,
  };
};
