import { createContext, useState } from "react";

export const InfoDrinkContext = createContext();

export const InfoDrinkProvider = ({ children }) => {
  const [drink, setDrink] = useState({});

  const addDrink = (drink) => {
    setDrink(drink);
  };

  return (
    <InfoDrinkContext.Provider value={{ drink, addDrink }}>
      {children}
    </InfoDrinkContext.Provider>
  );
};
