import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Header from "./components/headerFooter/Header";
import Footer from "./components/headerFooter/Footer";

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
        path: "/watch/:videoId",
        element: <Watch />,
      },
    ],
  },
]);

export default appRouter;
