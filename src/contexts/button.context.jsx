import { createContext, useState } from "react";

export const ButtonContext = createContext({
  buttonType: {
    smallRedButton: "sml-red-btn",
    smallBlueButton: "sml-blue-btn",
    mediumBlueButton: "md-blue-btn",
    mediumGreyButton: "md-grey-btn",
  },
  setButtonType: () => null,
});

export const ButtonContextProvider = ({ children }) => {
  const [buttonType, setButtonType] = useState({
    smallRedButton: "sml-red-btn",
    smallBlueButton: "sml-blue-btn",
    mediumBlueButton: "md-blue-btn",
    mediumGreyButton: "md-grey-btn",
  });

  const value = { buttonType, setButtonType };
  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
