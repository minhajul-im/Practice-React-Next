import React from "react";

const Login = ({ searchParams }) => {
  return (
    <div>
      <h1>Login Page </h1>
      <h1>{searchParams.title}</h1>
      <h1>{searchParams.name}</h1>
      <h1>{searchParams.id}</h1>
    </div>
  );
};

export default Login;
