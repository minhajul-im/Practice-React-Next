<<<<<<< HEAD
import { Home, Browse } from "../pages/index";
import Header from "../components/header&footer/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
=======
import Home from "../pages/Home";
>>>>>>> parent of 8255e76 (form done)

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <Outlet />
=======
      <Home />
>>>>>>> parent of 8255e76 (form done)
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
