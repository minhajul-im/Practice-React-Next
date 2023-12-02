import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../pages/Home";
import Browse from "../pages/Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../features/userSlice";

const Application = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <h1 className="text-center font-bold text-green-600">hey developer!</h1>
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

export default appRouter;
