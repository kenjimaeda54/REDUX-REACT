import React, { useState, useEffect } from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { useDispatch } from "react-redux";

import api from "../../servicos/index";
import "./home.css";
import {  addToReserveRequest } from "../../store/modulos/reserve/action";
//por ser apenas export function sem o default,precisa colocar como objeto.

export default function Home() {
  const [resultado, setResultado] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function dados() {
      const dados = await api.get('trips');
      setResultado(dados.data);
    }
    dados();
  }, []);

  function adicionar(id) {
    dispatch(addToReserveRequest(id));
  }

  return (
    <div>
      <div className="box">
        {resultado.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <span>Status:{item.status ? "Disponivel" : "Indisponivel"}</span>
            <button type="button" onClick={() => adicionar(item.id)}>
              <div>
                <MdFlightTakeoff size={16} color="#FFF" />
              </div>
              <span>SOLICITAR RESEVA</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
