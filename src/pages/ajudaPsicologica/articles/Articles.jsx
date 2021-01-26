import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Button } from "react-bootstrap";

import casa1 from "../../../assets/images/casa1.jpg";
import artigo1 from "../../../assets/images/artigo1.jpg";
import casa_florecer from "../../../assets/images/casa_florecer.jpg";

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
          <div class="row">
            <div class="col-md-12 text-center">
              <h3>Artigos sobre Ajuda Psicológica</h3>
            </div>
          </div>

          <div class="row">
            {posts.map((item) => (
              <div class="col-md-4 text-center">
                <img src={item.image} class="img-fluid" alt={item.title} />
                <h5 class="mt-0">{item.title}</h5>
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
