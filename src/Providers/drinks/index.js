import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDrinks(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <DrinksContext.Provider value={{ drinks }}>
      {children}
    </DrinksContext.Provider>
  );
};
