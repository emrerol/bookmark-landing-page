import { useState, createContext } from "react";

export const ToggleContext = createContext({
  isToggle: false,
  setIsToggle: () => null,
});

export const ToggleContextProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  const value = { isToggle, setIsToggle };
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
