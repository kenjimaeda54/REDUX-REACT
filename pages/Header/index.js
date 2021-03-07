import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assests/logo.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const selectorSize = useSelector((state) => state.reducer.length);

  return (
    <header className="container">
      <Link to="/">
        <img src={logo} alt="meu logo" className="logo"></img>
      </Link>
      <Link className="reserva" to="/reserva">
        <div>
          <span>Minhas resevas</span>
          <strong>{selectorSize}reservas</strong>
        </div>
      </Link>
    </header>
  );
}
