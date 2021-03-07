import { BrowserRouter } from "react-router-dom";

import Rotas from "./rotas";
import Header from "./pages/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
