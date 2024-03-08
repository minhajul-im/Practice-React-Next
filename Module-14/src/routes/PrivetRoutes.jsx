import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <React.Fragment>
      {auth?.accessToken ? <Outlet /> : <Navigate to={"/login"} />}
    </React.Fragment>
  );
};

export default PrivateRoutes;
