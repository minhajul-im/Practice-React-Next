"use client";
import React from "react";
import { init } from "@/db/formData";

// convert array
const convertArr = (obj) =>
  Object.keys(obj).map((item) => ({ key: item, ...obj[item] }));

// form start
export const form = () => {
  const [state, setState] = React.useState({ ...init });
  const [textarea, setTextarea] = React.useState("");
  const dataSet = convertArr(state);

  //handle change function
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        ...state[e.target.name],
        value: e.target.value,
      },
    });
  };

  // text area
  const handleText = (e) => {
    setTextarea(e.target.value);
  };

  // submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //user data collect
    const userData = Object.keys(state).reduce((acc, cur) => {
      acc[cur] = state[cur].value;

      return acc;
    }, {});

    // add user data plus messages
    const user = {
      ...userData,
      mgs: textarea,
    };

    console.log(user);

    // clear that form
    setTextarea("");
    setState(init);
  };

  // return what i need
  return {
    dataSet,
    textarea,
    handleChange,
    handleText,
    handleSubmit,
  };
};
