import HeaderUi from "../../Ui/Header/HeaderUi";
import { FooterUi } from "../../Ui/Footer/FooterUi";
import { ReconocimientosUi } from "../../Ui/Antonio/Cosechas/Reconocientos/ReconocimientosUi";

export const ReconocimientosScreen = () => {
  return (
    <div>
      <HeaderUi />
      <ReconocimientosUi />
      <FooterUi />
    </div>
  );
};
