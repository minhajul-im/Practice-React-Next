import { Outlet, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <main>
      <Header />
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
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default RouterApp;
