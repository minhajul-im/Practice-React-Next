import { createBrowserRouter, Outlet } from "react-router-dom";

import { Blog, Home } from "./pages/index";
import { Header, Footer } from "./components/header&footer/index";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        path: "/blog/:id",
        element: <Blog />,
      },
    ],
  },
]);

export default appRouter;
