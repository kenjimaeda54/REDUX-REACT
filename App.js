import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Rotas from "./rotas";
import Header from "./pages/Header";
import store from "./store/index";
import history from "./servicos/history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Rotas />
      </Router>
    </Provider>
  );
}

export default App;
