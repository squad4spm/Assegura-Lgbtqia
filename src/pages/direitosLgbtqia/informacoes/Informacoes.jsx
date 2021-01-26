import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

import "./informacoes.css";

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://app.toplojavirtual.com.br/post/cat/1")
      .then((response) => {
        setPosts(response.data.posts);
      });
  }, []);

  return (
    <Container>
      <div id="pg_direito_informacoes">
        {posts.map((item) => (
          <div class="row">
            <div class="col-md-3">
              <img src={item.image} />
            </div>

            <div class="col-md-9">
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
