import React from "react";
import Sugestao from "./Sugestao";

import img_post_1 from "./img/brunomars.jpg";
import img_post_2 from "./img/friends.jpg";
import img_post_3 from "./img/rio.jpg";

// Sugestões de usuários que aparecem à direita dos posts
function InfoUser(props) {
  return (
    <div className="user-container">
      <div className="info-user">
        <a href="#">
          <img src={props.foto_usuario} />
        </a>
      </div>

      <div>
        <a href="#">{props.username}</a>
        <p>{props.nome}</p>
      </div>

      <p>
        <b>Sugestões para você:</b>
      </p>

      <Sugestao foto_perfil={img_post_1} username="i" />

      <Sugestao foto_perfil={img_post_2} username="j" />

      <Sugestao foto_perfil={img_post_3} username="k" />
    </div>
  );
}

export default InfoUser;
