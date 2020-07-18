import React from "react";
// ícones
import icoracao from "./img/coracao.svg";
import icomente from "./img/comente.svg";
import iorigami from "./img/origami.svg";
import isave from "./img/save.svg";

function Post(props) {
  return (
    <div className="postagem">
      <img src={props.imagem} />

      <div class="info-post">
        {/*ícones*/}
        <p>
          <img src={icoracao} />
          <img src={icomente} />
          <img src={iorigami} />
          <img src={isave} />
        </p>
        <p>
          <a href="#">{props.nome_usuario} </a>
          {props.descricao}
        </p>
        <p>
          <input type="text" placeholder="Adicionar um comentário..." />
          <button type="button">Enviar</button>
        </p>
      </div>
    </div>
  );
}

export default Post;
