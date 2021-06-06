import { createContext, useState } from "react";

export const PartyCartContext = createContext();

export const PartyCartProvider = ({ children }) => {
  const [partyCart, setPartyCard] = useState({
    counter: 0,
    cart: [],
  });
  console.log(partyCart);

  const addDrinkParty = (drink) => {
    const { counter, cart } = partyCart;
    setPartyCard({ counter: counter + 1, cart: [...cart, drink] });
  };

  return (
    <PartyCartContext.Provider value={{ partyCart, addDrinkParty }}>
      {children}
    </PartyCartContext.Provider>
  );
};
