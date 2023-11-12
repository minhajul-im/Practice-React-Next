import { createBrowserRouter, Outlet } from "react-router-dom";

import Menu from "./pages/Menu";
import ErrorPage from "./pages/ErrorPage";
import Restaurants from "./pages/Restaurants";
import Header from "./components/header/Header";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Header />

      <section className="w-5/6 mx-auto">
        <Outlet />
      </section>
    </>
  );
};

const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/restaurants/:id",
        element: <Restaurants />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default RouterApp;
