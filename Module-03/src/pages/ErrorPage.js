import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const params = useRouteError();
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <h1>
        {params?.status} 🥺 {params?.statusText}
      </h1>
      <h2>Ooppsssss 🥺 </h2>
      <h6>Something is wrong!🥺</h6>
      <Link to={"/"}> back to home </Link>
    </main>
  );
};

export default ErrorPage;
