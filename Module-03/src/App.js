import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";

const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Navbar />
        <Outlet />
      </main>
    );
  }
}

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
        path: "/about",
        element: (
          <Suspense
            fallback={
              <h1 style={{ color: "red", textAlign: "center" }}>
                Oppssssssssssssss 🥵
              </h1>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <h1 style={{ color: "red", textAlign: "center" }}>waiting</h1>
            }
          >
            <Contact />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
