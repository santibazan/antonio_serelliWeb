import { AntonioUi } from "../../Ui/Antonio/AntonioUi";
import { FooterUi } from "../../Ui/Footer/FooterUi";
import { HeaderUi } from "../../Ui/Header/HeaderUi";

export const AntonioScreen = () => {
  return (
    <div>
      <HeaderUi />
      <AntonioUi />
      <FooterUi />
    </div>
  );
};
