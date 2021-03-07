import produce from "immer";

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVE_SUCESS":
      return produce(state, (draft) => {
        draft.push(action.item);
      });

    case "REMOVE_RESERVE":
      return produce(state, (draft) => {
        const verifica = draft.findIndex((item) => item.id === action.id);
        if ((verifica) => 0) {
          draft.splice(verifica, 1);
        }
      });

    case "UPDATE_RESERVE":
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, (draft) => {
        const verifica = draft.findIndex((item) => item.id === action.id);

        if (verifica >= 0) {
          draft[verifica].amount = Number(action.amount);
        }
      });

    default:
      return state;
  }
}
