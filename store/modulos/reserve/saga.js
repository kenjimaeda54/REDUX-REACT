import { call, all, put, takeLatest, select } from "redux-saga/effects";

import history from "../../../servicos/history";
import api from "../../../servicos/index";
import { addReserve, atualizaReservaSucesso } from "../reserve/action";

function* addToReserve({ id }) {
  const estado = yield select(
    (state) => state.reducer.find((item) => item.id === id)
    //esse state reducer esta na pagina de resevas
    //quando usuario clica no botao de adiconar reserva,ele vai para pagina reserva e la tem um estado
  );
  const estoque = yield call(api.get, `stock/${id}`);
  const addEstoque = estoque.data.amount;
  const existeEstoque = estado ? estado.amount : 0;
  const amount = existeEstoque + 1;
  if (amount > addEstoque) {
    alert("Atingiu o limite disponivel");
    return;
  }

  if (estado) {
    yield put(atualizaReservaSucesso(id, amount));
  } else {
    const response = yield call(api.get, `/trips/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addReserve(data));
    history.push('/reserva'); //cuidado com os "" isto pode quebrar você;
  }
}

function* addToValor({ id, amount }) {
  if (amount <= 0) return;
  const estoque = yield call(api.get, `stock/${id}`);
  const totalEstoque = estoque.data.amount;
  if (amount > totalEstoque) {
    alert("Atingiu o limite de reservas");
    return; //se não colocar o return ele da erro e adicona um
  }
  yield put(atualizaReservaSucesso(id, amount));
}

export default all([
  takeLatest("ADD_RESERVE_REQUESTS", addToReserve),
  takeLatest("UPDATE_RESERVE_REQUESTS", addToValor),
]);
//cudado takeLatest e uma function takeLatest(...)
