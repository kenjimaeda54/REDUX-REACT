import { all } from "redux-saga/effects";

import saga from "./reserve/saga";

export default function* rootSaga() {
  return yield all([saga]);
}
