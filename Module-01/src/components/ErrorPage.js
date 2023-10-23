import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const route = useRouteError();

  return (
    <div>
      <h1> Ooppsssssssss!</h1>
      <h1> Something is wrong!</h1>
      <div className="error">
        <Link className="errorLink" to={"/"}>
          back to home
        </Link>
      </div>
      <h1>
        {route.status} !!!!! {route.statusText}
      </h1>
      <h1>{route.data}</h1>
    </div>
  );
};

export default ErrorPage;
