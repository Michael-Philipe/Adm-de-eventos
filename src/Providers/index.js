import { DrinksProvider } from "./drinks";
import { InfoDrinkProvider } from "./infoDrink";
import { PartyCartProvider } from "./party";
import { GraduationCartProvider } from "./graduation";
import { WeddingCartProvider } from "./wedding";

const Providers = ({ children }) => {
  return (
    <PartyCartProvider>
      <WeddingCartProvider>
        <GraduationCartProvider>
          <DrinksProvider>
            <InfoDrinkProvider>{children}</InfoDrinkProvider>
          </DrinksProvider>
        </GraduationCartProvider>
      </WeddingCartProvider>
    </PartyCartProvider>
  );
};

export default Providers;
