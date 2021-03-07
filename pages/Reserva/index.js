import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import { removeReserva } from "../../store/modulos/reserve/action";
import "./reserva.css";

export default function Reserva() {
  const seletor = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  function excluirReserva(id) {
    dispatch(removeReserva(id));
  }

  return (
    <div>
      <h1 className="title"> Voce solicitou:{seletor.length}</h1>

      {seletor.map((item) => (
        <div key={item.id} className="reservas">
          <img src={item.image} alt={item.tile} />
          <strong>{item.title}</strong>
          <span>Quantidade: {item.amount}</span>
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
