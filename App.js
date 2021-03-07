import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Rotas from "./rotas";
import Header from "./pages/Header";
import store from "./store/index";

function App() {
  return (
    <Provider  store={store}>
      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
