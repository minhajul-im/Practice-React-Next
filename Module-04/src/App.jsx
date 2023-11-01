import React, { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import ShimmerUi from "./pages/ShimmerUi";
import ItemDetails from "./pages/ItemDetails";

const Menu = lazy(() => import("./pages/Menu"));

const App = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
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
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/itemDetails/:id",
        element: <ItemDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default RouterApp;
