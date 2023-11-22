import { createBrowserRouter, Outlet } from "react-router-dom";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
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
