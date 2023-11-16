import { createBrowserRouter, Outlet } from "react-router-dom";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
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
export default router;
