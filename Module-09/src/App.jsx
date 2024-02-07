import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

import VideoesProvider from "./context/VideoesContext";
import ToggleContextProvider from "./context/AsideContext";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <main>
      <ToggleContextProvider>
        <Navbar />
        <Aside />
      </ToggleContextProvider>

      <VideoesProvider>
        <Outlet />
      </VideoesProvider>
    </main>
  );
}
