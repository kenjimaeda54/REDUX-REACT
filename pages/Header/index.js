import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assests/logo.svg";

export default function Header() {
  return (
    <header className="container">
        <Link to="/">
          <img src={logo} alt="meu logo" className="logo"></img>
        </Link>
        <Link className="reserva" to="/reserva">
          <div>
            <span>Minhas resevas</span>
            <strong>3 reservas</strong>
          </div>
        </Link>
    </header>
  );
}
