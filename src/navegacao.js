import React from "react";

// logo e icones
import logo from "./img/logo.png";
import inavegador from "./img/navegador.svg";
import icoracao from "./img/coracao.svg";
import iorigami from "./img/origami.svg";
import ibussola from "./img/bussola.svg";

function Nav(props) {
  return (
    <div className="nav">
      <a href="#">
        <img src={logo} />
      </a>
      <input type="text" placeholder="Pesquisar" />

      <div className="nav-direita">
        <a href="#">
          <img src={inavegador} width="22px" height="22px" />
        </a>
        <a href="#">
          <img src={iorigami} width="22px" height="22px" />
        </a>
        <a href="#">
          <img src={ibussola} width="22px" height="22px" />
        </a>
        <a href="#">
          <img src={icoracao} width="22px" height="22px" />
        </a>
        <a href="#">
          <img
            className="foto-perfil"
            src={props.foto_usuario}
            width="22px"
            height="22px"
          />
        </a>
        <p></p>
      </div>
    </div>
  );
}

export default Nav;
