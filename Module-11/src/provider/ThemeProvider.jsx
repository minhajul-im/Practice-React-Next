import { useState } from "react";

import { ThemeContext } from "../context/ThemeContext";

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
