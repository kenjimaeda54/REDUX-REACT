import { call, all, put, takeLatest, select } from "redux-saga/effects";

import api from "../../../servicos/index";
import { addReserve, atualizaValor } from "../reserve/action";

function* addToReserve({ id }) {
  const estado = yield select(
    (state) => state.reducer.find((item) => item.id === id)
    //esse state reducer esta na pagina de resevas
    //quando usuario clica no botao de adiconar reserva,ele vai para pagina reserva e la tem um estado
  );
  const estoque = yield call(api.get, `stock/${id}`);
  const addStoque = estoque.data.amount;
  const existeStoque = estado ? estado.amount : 0;
  const amount = existeStoque + 1;

  if (amount > addStoque) {
    alert("Atingiu a quantidade maxima");
    return;
  }

  if (estado) {
    yield put(atualizaValor(id, amount));
  } else {
    const response = yield call(api.get, `trips/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addReserve(data));
  }
}

export default all([takeLatest("ADD_RESERVE_REQUESTS", addToReserve)]);
//cudado takeLatest e uma function takeLatest(...)
