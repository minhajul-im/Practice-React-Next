import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./pages/About";
import Body from "./pages/Body";
import Header from "./components/Header";

const App = () => {
  return (
    <main>
      <Header />
      <Outlet />
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
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default AppRouter;
