import React from "react";

function Story(props) {
  return (
    <div className="story">
      <img src={props.foto_perfil} />
      <a href="#">{props.username}</a>
    </div>
  );
}

export default Story;
