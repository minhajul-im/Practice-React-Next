import { createBrowserRouter, Outlet } from "react-router-dom";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import store from "./app/store";
import User from "./pages/User";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
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
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
export default router;
