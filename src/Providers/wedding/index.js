import { createContext, useEffect, useState } from "react";

export const WeddingCartContext = createContext();

export const WeddingCartProvider = ({ children }) => {
  const [weddingCart, setWeddingCart] = useState({
    counter: 0,
    cart: [],
  });

  const addDrinkWedding = (drink) => {
    const { counter, cart } = weddingCart;
    setWeddingCart({ counter: counter + 1, cart: [...cart, drink] });
  };

  return (
    <WeddingCartContext.Provider value={{ addDrinkWedding, weddingCart }}>
      {children}
    </WeddingCartContext.Provider>
  );
};
