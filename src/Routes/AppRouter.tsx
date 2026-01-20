import { Route, Routes } from "react-router"
import { LandingScreen } from "../components/Screens/Landing/LandingScreen"
import { AntonioScreen } from "../components/Screens/Antonio/AntonioScreen"
import { ArmeScreen } from "../components/Screens/ArMe/ArmeScreen"
import { RebecaScreen } from "../components/Screens/Rebeca/RebecaScreen"
import { ContactoScreen } from "../components/Screens/Contacto/ContactoScreen"
import { HistoriaScreen } from "../components/Screens/Historia/HistoriaScreen"


export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen/>}/>
        <Route path="/AntonioSarelli" element={<AntonioScreen/>}/>
        <Route path="/ArteMendocino" element={<ArmeScreen/>}/>
        <Route path="/RebecaSarelli" element={<RebecaScreen/>}/>
        <Route path="/Contacto" element={<ContactoScreen/>}/>
        <Route path="/Historia" element={<HistoriaScreen/>}/>
      </Routes>
    </div>
  )
}
