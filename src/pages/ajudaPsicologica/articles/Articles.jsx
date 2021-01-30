import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Button } from "react-bootstrap";

import "./articles.css";

export default () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://app.toplojavirtual.com.br/post/cat/4")
      .then((response) => {
        setPosts(response.data.posts);
      });
  }, []);

  return (
    <Container fluid>
      <section id="pg_sobre_psicologia_articles">
        <Container>
          <div className="row">
            <div className="col-md-12 text-center">
              <h3>Artigos sobre Ajuda Psicológica</h3>
            </div>
          </div>

          <div className="row">
            {posts.map((item) => (
              <div className="col-md-4 text-center">
                <img src={item.image} class="img-fluid" alt={item.title} />
                <h5 className="mt-0">{item.title}</h5>
                <p>{item.content}</p>
                <Button
                  variant="outline-success"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  Leia mais
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Container>
  );
};
