import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import ContextApi from "./utils/ContextApi";

import { Navbar, Footer } from "./components/index";
import { Home, User, Watch } from "./pages/index";

const App = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:9000/videos");
    const data = await response.json();
    setState(data);
    setSearch(data);
  };

  return (
    <ContextApi.Provider value={{ state, search, setState }}>
      <Navbar />
      <Outlet />
      <Footer />
    </ContextApi.Provider>
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
      {
        path: "/user/:id",
        element: <User />,
      },
    ],
  },
]);

export default appRouter;
