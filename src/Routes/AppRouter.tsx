import ScrollToTop from "../ScrollToTop"

import { Route, Routes } from "react-router-dom"
import { LandingScreen } from "../components/Screens/Landing/LandingScreen"
import { AntonioScreen } from "../components/Screens/Antonio/AntonioScreen"
import { ArmeScreen } from "../components/Screens/ArMe/ArmeScreen"
import { RebecaScreen } from "../components/Screens/Rebeca/RebecaScreen"
import { ContactoScreen } from "../components/Screens/Contacto/ContactoScreen"

import { DecadasScreen } from "../components/Screens/Decadas/DecadasScreen"
import { SiembraScreen } from "../components/Screens/Antonio/SiembraScreen"
import { FrutosScreen } from "../components/Screens/Antonio/FrutosScreen"
import { CosechasScreen } from "../components/Screens/Antonio/CosechaScreen"
import { ReconocimientosScreen } from "../components/Screens/Antonio/ReconocimientosScreen"
import { PremiosScreen } from "../components/Screens/Antonio/PremiosScreen"
import { CriticasScreen } from "../components/Screens/Antonio/CriticasScreen"
import { GrabadoScreen } from "../components/Screens/Rebeca/GrabadoScreen"
import { PinturaScreen } from "../components/Screens/Rebeca/PinturaScreen"
import { EsculturaScreen } from "../components/Screens/Rebeca/EsculturaScreen"




export const AppRouter = () => {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingScreen/>}/>
        <Route path="/AntonioSarelli" element={<AntonioScreen/>}/>
        <Route path="/RebecaSarelli" element={<RebecaScreen/>}/>
        <Route path="/RebecaSarelli/Grabado" element={<GrabadoScreen/>}/>
        <Route path="/RebecaSarelli/Pintura" element={<PinturaScreen/>}/>
        <Route path="/RebecaSarelli/Escultura" element={<EsculturaScreen/>}/>
        <Route path="/ArteMendocino" element={<ArmeScreen/>}/>
        <Route path="/Contacto" element={<ContactoScreen/>}/>
        <Route path="/AntonioSarelli/LaSiembra" element={<SiembraScreen/>}/>
        <Route path="/AntonioSarelli/LosFrutos" element={<FrutosScreen/>}/>
        <Route path="/AntonioSarelli/LaCosecha" element={<CosechasScreen/>}/>
        <Route path="/AntonioSarelli/Reconocimientos" element={<ReconocimientosScreen/>}/>
        <Route path="/AntonioSarelli/Premios" element={<PremiosScreen/>}/>
        <Route path="/AntonioSarelli/Criticas" element={<CriticasScreen/>}/>
        <Route path="/AntonioSarelli/Decadas" element={<DecadasScreen/>}/>
      </Routes>
    </>
  )
}
