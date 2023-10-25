"use client";

import { useState } from "react";
import {
  CustomElementRenderer,
  UserLoginFormConfig,
} from "@/components/CustomRenderElement";

const Home = () => {
  const [state, setState] = useState({});
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormData(state);
  };

  const handleOnChange = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {UserLoginFormConfig.map((obj) => {
          return (
            <CustomElementRenderer obj={obj} onChangeFunc={handleOnChange} />
          );
        })}
      </form>
      <span>
        <h3>Data submitted: </h3>
        {JSON.stringify(formData)}
      </span>
    </>
  );
};

export default Home;
