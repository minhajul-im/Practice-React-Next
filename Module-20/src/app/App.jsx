import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import User from "../context/userContext";
import { auth } from "../utilities/firebase";
import { Home, Dashboard } from "../pages/index";
import Header from "../components/Header";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName } = user;
        setData({ email, displayName });
      } else {
        setData(null);
      }
    });
  }, []);

  return (
    <User.Provider value={{ data, setData }}>
      <Header />
      <Outlet />
    </User.Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default appRoute;
