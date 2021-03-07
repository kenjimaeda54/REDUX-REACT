import provide from "immer";

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVE_SUCESS":
      return provide(state, (draft) => {
        const verifica = draft.findIndex((item) => item.id === action.item.id);
        if (verifica >= 0) {
          draft[verifica].amount += 1;
        } else {
          draft.push({
            ...action.item,
            amount: 1,
          });
        }
      });

    case "REMOVE_RESERVE":
      return provide(state, (draft) => {
        const verifica = draft.findIndex((item) => item.id === action.id);
        if ((verifica) => 0) {
          draft.splice(verifica, 1);
        }
      });

    case "UPDATE_RESERVE":
      if (action.amount <= 0) {
        return state;
      }

      return provide(state, (draft) => {
        const verifica = draft.findIndex((item) => item.id === action.id);
        if ((verifica) => 0) {
          draft[verifica].amount = Number(action.amount);
        }
      });

    default:
      return state;
  }
}
