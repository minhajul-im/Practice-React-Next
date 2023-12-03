import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import User from "../context/userContext";
import { auth } from "../utilities/firebase";
import { Home, Dashboard } from "../pages/index";

const App = () => {
  const userIdentity = useContext(User);
  const [data, setData] = useState(userIdentity);
  console.log(data);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        setData({ email: email, uid: uid, displayName: displayName });
      } else {
        console.log("no user");
      }
    });
  }, []);

  return (
    <User.Provider value={data} className="bg-slate-100 py-10">
      <h1 className="text-red-600 font-bold text-center py-2">Hey there!</h1>
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
