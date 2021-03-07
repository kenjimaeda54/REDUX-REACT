import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

import "./reserva.css";

export default function Reserva() {
  const seletor = useSelector((state) => state.reducer);
  return (
    <div>
      <h1 className="title"> Suas reservas:{seletor.length}</h1>

      {seletor.map((item) => (
        <div key={item.id} className="reservas">
          <img src={item.image} alt={item.tile} />
          <strong>{item.title}</strong>
          <span>Quantidade: {item.amount}</span>
          <button type="button" onClick={() => {}}>
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
