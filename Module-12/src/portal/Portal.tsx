import React from "react";
import { createPortal } from "react-dom";

interface PropsPortal {
  children: React.ReactNode;
}

const Portal = ({ children }: PropsPortal) => {
  const portalDiv = document.getElementById("portal");

  return createPortal(children, portalDiv); // give me a warning can you see this
};

export default Portal;
