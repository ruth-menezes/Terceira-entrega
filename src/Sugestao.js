import React from "react";

function Sugestao(props) {
  return (
    <div className="sugestao">
      <a href="#">
        <img src={props.foto_perfil} /> {props.username}
      </a>
      <button type="button">Seguir</button>
    </div>
  );
}

export default Sugestao;
