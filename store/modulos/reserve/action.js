export function addReserva(item) {
  return {
    type: "ADD_RESERVE",
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
