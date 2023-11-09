import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Food from "./pages/Food";
import Body from "./pages/Body";
import Task from "./pages/Task";
import Header from "./components/Header";
import ContextData from "./utils/ContextData";

const App = () => {
  const [state, setState] = useState();

  useEffect(() => {
    const data = {
      homeName: "Minhaj Muhammad",
      foodPage: "Hey there, Here all amazing Food😋",
      navbarName: "Hey, I'm Minhaj!",
      taskName: "Hey, you can create your task!",
    };
    setState(data.homeName);
  }, []);

  return (
    <main>
      <ContextData.Provider value={{ username: state, setState }}>
        <Header />
        <Outlet />
      </ContextData.Provider>
    </main>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/food",
        element: <Food />,
      },
    ],
  },
]);
export default AppRouter;
