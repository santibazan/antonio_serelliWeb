import { BrowserRouter } from "react-router";
import "./App.css";
import { AppRouter } from "./Routes/AppRouter";
// import { HistoriaScreen } from "./components/Screens/Historia/HistoriaScreen";


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
        {/* <HistoriaScreen/> */}
      </BrowserRouter>
    </>
  );
}

export default App;

