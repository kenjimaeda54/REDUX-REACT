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
