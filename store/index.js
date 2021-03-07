import { createStore } from "redux";

import rootReducer from "./modulos/rootReducer";

const store = createStore(rootReducer);

export default store;
