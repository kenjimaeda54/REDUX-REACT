export function addToReserveRequest(id) {
  return {
    type: "ADD_RESERVE_REQUESTS",
    id,
  };
}

export function addReserve(item) {
  return {
    type: "ADD_RESERVE_SUCESS",
    item,
  };
}

export function removeReserva(id) {
  return {
    type: "REMOVE_RESERVE",
    id,
  };
}

export function atualizaReservaRequisicao(id, amount) {
  return {
    type: "UPDATE_RESERVE_REQUESTS",
    id,
    amount,
  };
}
export function atualizaReservaSucesso(id, amount) {
  return {
    type: "UPDATE_RESERVE_SUCESS",
    id,
    amount,
  };
}
