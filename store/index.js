import { createStore } from "redux";

import rootReducer from "../store/modulos/rootReducer";

const store = createStore(rootReducer);

export default store;
