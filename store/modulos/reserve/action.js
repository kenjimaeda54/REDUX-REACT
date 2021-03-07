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

export function atualizaValor(id, amount) {
  return {
    type: "UPDATE_RESERVE",
    id,
    amount,
  };
}
