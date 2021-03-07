import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Reserva from "./pages/Reserva";

export default function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reserva" component={Reserva} />
    </Switch>
  );
}
