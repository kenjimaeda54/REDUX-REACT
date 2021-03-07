import { all, call,put, takeLatest } from "redux-saga/effects";

import api from "../../../servicos/index";
import { addReserva } from "../reserve/action";

function* addToReserve({id}) {
  const response = yield call(api.get,`trips/${id}`);
  yield put(addReserva(response.data));
}

export default all([takeLatest("ADD_RESERVE_REQUESTS", addToReserve)]);
