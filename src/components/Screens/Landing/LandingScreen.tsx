import { FooterUi } from "../../Ui/Footer/FooterUi";
import HeaderUi from "../../Ui/Header/HeaderUi";
import { LandingUi } from "../../Ui/Landing/LandingUi";

export const LandingScreen = () => {
  return (
    <>
    <div>
      <HeaderUi />
      <LandingUi />
      <FooterUi/>
    </div>
    </>
  );
};
