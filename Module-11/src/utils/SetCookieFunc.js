"use client";

import React, { useState } from "react";

const init = {
  key: {
    id: "1",
    label: "Key",
    type: "text",
    value: "",
    placeholder: "write key",
  },

  value: {
    id: "2",
    label: "Value",
    type: "text",
    value: "",
    placeholder: "write value",
  },
};

// convert array
const convertToTheArrayByObject = (obj) =>
  Object.keys(obj).map((item) => ({ key: item, ...obj[item] }));

const SetCookiesFunc = () => {
  const [state, setState] = useState({ ...init });
  const [cookie, setCookie] = useState({});

  const data = convertToTheArrayByObject(state);

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        ...state[e.target.name],
        value: e.target.value,
      },
    });
  };

  const handleOnClick = () => {
    const data = Object.keys(state).reduce((acc, cur) => {
      acc[cur] = state[cur].value;

      return acc;
    }, {});

    if (Object.keys(data).length > 0) {
      setCookie(data);

      setState(init);
    }
  };

  return {
    data,
    cookie,
    handleOnChange,
    handleOnClick,
  };
};

export default SetCookiesFunc;
