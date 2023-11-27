import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Watch from "./pages/Watch";
import Header from "./components/headerFooter/Header";
import Footer from "./components/headerFooter/Footer";
import { SearchContext } from "./utilities/SearchContext";
import { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [state, setState] = useState([]);

  useEffect(() => {
    const search = "";
    setInput(search);
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(" http://localhost:9000/videos");
    const jsonData = await response.json();

    setState(jsonData);
  };

  return (
    <SearchContext.Provider value={{ search: input, videos: state, setInput }}>
      <Header />
      <Outlet />
      <Footer />
    </SearchContext.Provider>
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
        path: "/user/:userId",
        element: <User />,
      },
    ],
  },
]);

export default appRouter;
