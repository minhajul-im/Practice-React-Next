import { createBrowserRouter, Outlet } from "react-router-dom";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import Youtube from "./page/Youtube";
import Watch from "./page/Watch";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <main>
      <Navbar onToggle={() => setShow((prev) => !prev)} />
      <section className='flex'>
        <Aside show={show} />
        <Outlet />
      </section>
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Youtube />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);

export default router;
