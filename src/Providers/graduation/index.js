import { createContext, useState } from "react";

export const GraduationCartContext = createContext();

export const GraduationCartProvider = ({ children }) => {
  const [graduationCart, setGraduationCart] = useState({
    counter: 0,
    cart: [],
  });

  const addDrinkGraduation = (drink) => {
    const { counter, cart } = graduationCart;
    setGraduationCart({
      counter: counter + 1,
      cart: [...cart, drink],
    });
  };

  const removeDrinkGraduation = (drink) => {
    const { cart, counter } = graduationCart;
    const cartFiltered = cart.filter((d) => d.id !== drink.id);
    setGraduationCart({ counter: counter - 1, cart: cartFiltered });
  };

  return (
    <GraduationCartContext.Provider
      value={{ addDrinkGraduation, graduationCart, removeDrinkGraduation }}
    >
      {children}
    </GraduationCartContext.Provider>
  );
};
