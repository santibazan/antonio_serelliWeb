import { Route, Routes } from "react-router";
import { LandingScreen } from "../components/Screens/LandingScreen/LandingScreen";
import { AntonioSarelliScreen } from "../components/Screens/Antonio/AntonioSarelliScreen";
import { ArteMendocinoScreen } from "../components/Screens/ArteMendocino/ArteMendocinoScreen";
import { RebecaSarelliScreen } from "../components/Screens/RebecaSarelli/RebecaSarelliScreen";
import { ContactoScreen } from "../components/Screens/Contacto/ContactoScreen";


export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingScreen/>}/>
            <Route path="/AntonioSarelli" element={<AntonioSarelliScreen/>}/>
            <Route path="/ArteMendocino" element={<ArteMendocinoScreen/>}/>
            <Route path="/RebecaSarelli" element={<RebecaSarelliScreen/>}/>
            <Route path="/Contacto" element={<ContactoScreen/>}/>
        </Routes>
    </div>
  )
}
