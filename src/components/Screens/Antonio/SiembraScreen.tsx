import HeaderUi from "../../Ui/Header/HeaderUi";
import { FooterUi } from "../../Ui/Footer/FooterUi";
import { SiembraUi } from "../../Ui/Antonio/Siembra/SiembraUi";

export const SiembraScreen = () => {
  return (
    <div>
      <HeaderUi />
      <SiembraUi />
      <FooterUi />
    </div>
  );
};
