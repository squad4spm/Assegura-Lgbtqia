import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

import "./informacoes.css";

const Informacoes = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://app-toplojavirtual-com-br.umbler.net/post/cat/1")
      .then((response) => {
        setPosts(response.data.posts);
      });
  }, []);

  return (
    <Container>
      <div id="pg_direito_informacoes">
        {posts.map((item) => (
          <div className="row">
            <div className="col-md-3">
              <img src={item.image} alt="" />
            </div>

            <div className="col-md-9">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <Button
                variant="outline-success"
                onClick={() => window.open(item.link, "_blank")}
              >
                Leia mais
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Informacoes;