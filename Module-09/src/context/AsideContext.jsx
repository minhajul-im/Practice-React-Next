import { createContext, useContext, useState } from "react";

const AsideContext = createContext(null);
const SetAsideContext = createContext(null);

export const useTaggleContext = () => {
  return useContext(AsideContext);
};

export const useSetToggleContext = () => {
  return useContext(SetAsideContext);
};

export default function ToggleContextProvider({ children }) {
  const [showAside, setShowAside] = useState(false);

  return (
    <AsideContext.Provider value={showAside}>
      <SetAsideContext.Provider value={setShowAside}>
        {children}
      </SetAsideContext.Provider>
    </AsideContext.Provider>
  );
}
