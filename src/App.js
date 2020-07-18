import React, { Component } from "react";
import Nav from "./navegacao";
import Story from "./Story";
import InfoUser from "./InfoUser";
import Post from "./Post";

// imagens dos 3 posts
import img_post_1 from "./img/brunomars.jpg";
import img_post_2 from "./img/friends.jpg";
import img_post_3 from "./img/rio.jpg";

// imagem do usuário
import imagem_user from "./img/foto-usuario.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*barra de navegação*/}
        <Nav foto_usuario={imagem_user} />

        <div className="container">
          <div className="postagens">
            {/* stories */}
            <div className="stories">
              <Story foto_perfil={img_post_1} username="a" />

              <Story foto_perfil={img_post_1} username="b" />

              <Story foto_perfil={img_post_1} username="c" />

              <Story foto_perfil={img_post_2} username="d" />
              <Story foto_perfil={img_post_2} username="e" />

              <Story foto_perfil={img_post_2} username="f" />

              <Story foto_perfil={img_post_3} username="g" />
              <Story foto_perfil={img_post_3} username="h" />
            </div>

            {/*os posts:*/}
            <Post
              nome_usuario="brunomars"
              descricao="24K Magic."
              imagem={img_post_1}
            />

            <Post
              nome_usuario="friends"
              descricao="Friends, but now 6 feet apart."
              imagem={img_post_2}
            />

            <Post
              nome_usuario="riodejaneiro"
              descricao="O Rio de Janeiro continua lindo!"
              imagem={img_post_3}
            />
          </div>

          {/*informação do usuário que aparece à direita dos posts*/}
          <InfoUser
            username="ruthmenezess_"
            nome="Ruth Menezes"
            foto_usuario={imagem_user}
          />
        </div>
      </div>
    );
  }
}

export default App;
