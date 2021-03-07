import provide from "immer";

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVE":
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
    default:
      return state;

    case "REMOVE_RESERVE":
      return provide(state,(draft)=>{
        const verifica = draft.findIndex((item)=>item.id === action.id);
        if(verifica =>0){
          draft.splice(verifica, 1);
        }
      })  
  }
}
