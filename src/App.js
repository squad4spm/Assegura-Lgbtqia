import "./App.css";
import VLibras from "@djpfs/react-vlibras";

import Rotas from "./rotas.js";
import MyContextProvider from "./contexts/MyContext";

import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <MyContextProvider>
      <VLibras />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
