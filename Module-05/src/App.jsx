import { Provider } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import appStore from "./redux/appStore";
import ErrorPage from "./pages/ErrorPage";
import Restaurants from "./pages/Restaurants";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <section className="w-5/6 mx-auto">
        <Outlet />
      </section>
    </Provider>
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
