import React, { useState, useEffect } from "react";
import { MdFlightTakeoff } from "react-icons/md";

import api from "../../servicos/index";
import "./home.css";

export default function Home() {
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    async function dados() {
      const dados = await api.get("trips");
      setResultado(dados.data);
    }
    dados();
  }, []);

  return (
    <div>
      <div className="box">
        {resultado.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <span>Status:{item.status ? "Disponivel" : "Indisponivel"}</span>
            <button type="button" onClick={() => {}}>
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
