import { createBrowserRouter, Outlet } from "react-router-dom";

import Menu from "./pages/Menu";
import ErrorPage from "./pages/ErrorPage";
import Restaurants from "./pages/Restaurants";

const App = () => {
  return (
    <main className="w-5/6 mx-auto">
      <h1 className="text-center text-amber-600 text-4xl font-bold py-2">
        Restaurants with online food delivery in Bangalore!
      </h1>

      <Outlet />
    </main>
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
    ],
    errorElement: <ErrorPage />,
  },
]);

export default RouterApp;
