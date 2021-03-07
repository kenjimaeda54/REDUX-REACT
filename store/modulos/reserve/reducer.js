import produce from "immer";

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVE":
      return produce(state, (draft) => {
        const encontra = draft.findIndex((item) => item.id === action.item.id);
        if (encontra >= 0) {
          draft[encontra].amount += 1;
        } else {
          draft.push({
            ...action.item,
            amount: 1,
          });
        }
      });

    default:
      return state;
  }
}
