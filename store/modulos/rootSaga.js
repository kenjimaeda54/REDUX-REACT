import { all } from "redux-saga/effects";

import saga from "../modulos/reserve/saga";

export default function* rootSaga() {
  return yield all([saga]);
}
