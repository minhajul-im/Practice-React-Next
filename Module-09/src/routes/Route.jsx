import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Youtube from "../page/Youtube";
import Watch from "../page/Watch";

const Route = createBrowserRouter([
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

export default Route;
