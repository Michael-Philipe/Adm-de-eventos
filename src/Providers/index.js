import { DrinksProvider } from "./drinks";
import { InfoDrinkProvider } from "./infoDrink";

const Providers = ({ children }) => {
  return (
    <DrinksProvider>
      <InfoDrinkProvider>{children}</InfoDrinkProvider>
    </DrinksProvider>
  );
};

export default Providers;
