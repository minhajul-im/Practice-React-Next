import { Navbar, Footer } from "./components/index";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
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
    ],
  },
]);

export default appRouter;
