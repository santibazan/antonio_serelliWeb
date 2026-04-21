import { useEffect } from "react";
import "./App.css";

import { AppRouter } from "./Routes/AppRouter";

function App() {
  useEffect(() => {
    document.body.classList.add("preload");

    const timer = setTimeout(() => {
      document.body.classList.remove("preload");
      document.body.classList.add("loaded");
    }, 50); // pequeño delay para asegurar render

    return () => clearTimeout(timer);
  }, []);

  return <AppRouter />;
}

export default App;
