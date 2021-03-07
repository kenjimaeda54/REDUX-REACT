import React from "react";
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import { removeReserva } from "../../store/modulos/reserve/action";
import "./reserva.css";
import { atualizaValor } from "../../store/modulos/reserve/action";

export default function Reserva() {
  const seletor = useSelector((state) => state.reducer);
  console.log(seletor);
  const dispatch = useDispatch();

  function excluirReserva(id) {
    dispatch(removeReserva(id));
  }

  function adicionaValor(item) {
    dispatch(atualizaValor(item.id, item.amount + 1));
  }

  function removeValor(item) {
    dispatch(atualizaValor(item.id, item.amount - 1));
  }

  return (
    <div>
      <h1 className="title"> Voce solicitou:{seletor.length}</h1>

      {seletor.map((item) => (
        <div key={item.id} className="reservas">
          <img src={item.image} alt={item.tile} />
          <strong>{item.title}</strong>

          <div id="amount">
            <button type="button" onClick={() => removeValor(item)}>
              <MdRemoveCircle size="20px" color="brand" />
            </button>
            <input value={item.amount} readOnly type="text" />
            <button type="button" onClick={() => adicionaValor(item)}>
              <MdAddCircle size="20px" color="brand" />
            </button>
          </div>

          <button type="button" onClick={() => excluirReserva(item.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
