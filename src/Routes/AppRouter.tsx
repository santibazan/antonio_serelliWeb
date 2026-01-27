import { Route, Routes } from "react-router"
import { LandingScreen } from "../components/Screens/Landing/LandingScreen"
import { AntonioScreen } from "../components/Screens/Antonio/AntonioScreen"
import { ArmeScreen } from "../components/Screens/ArMe/ArmeScreen"
import { RebecaScreen } from "../components/Screens/Rebeca/RebecaScreen"
import { ContactoScreen } from "../components/Screens/Contacto/ContactoScreen"
import { HistoriaScreen } from "../components/Screens/Historia/HistoriaScreen"
import { SiembraScreen } from "../components/Screens/Antonio/siembra/SiembraScreen"
import { FrutosScreen } from "../components/Screens/Antonio/frutos/FrutosScreen"
import { CosechasScreen } from "../components/Screens/Antonio/cosechas/CosechaScreen"
import { DecadasScreen } from "../components/Screens/Decadas/DecadasScreen"



export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen/>}/>
        <Route path="/AntonioSarelli" element={<AntonioScreen/>}/>
        <Route path="/RebecaSarelli" element={<RebecaScreen/>}/>
        <Route path="/ArteMendocino" element={<ArmeScreen/>}/>
        <Route path="/Contacto" element={<ContactoScreen/>}/>
        <Route path="/Historia" element={<HistoriaScreen/>}/>
        <Route path="/AntonioSarelli/LaSiembra" element={<SiembraScreen/>}/>
        <Route path="/AntonioSarelli/LosFrutos" element={<FrutosScreen/>}/>
        <Route path="/AntonioSarelli/LaCosecha" element={<CosechasScreen/>}/>
        <Route path="/AntonioSarelli/Decadas" element={<DecadasScreen/>}/>
      </Routes>
    </div>
  )
}
