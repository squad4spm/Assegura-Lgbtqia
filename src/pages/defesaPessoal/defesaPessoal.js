import React, { useState, useEffect } from "react";
import axios from "axios";

import "./defesaPessoal.css";
import img01 from "../../assets/images/Defesa.png";
import img02 from "../../assets/images/Defesa_Pessoal.png";
import { Container } from "react-bootstrap";

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://app.toplojavirtual.com.br/post/cat/2")
      .then((response) => {
        setPosts(response.data.posts);
      });
  }, []);

  return (
    <Container fluid>
      <section id="pg_defesa_pessoal_banner">
        <div class="jumbotron card card-image d-block">
          <p class="mx-2 mb-4">
            Defesa Pessoal <br /> LGBTQIA+
          </p>
        </div>
      </section>

      <section id="pg_defesa_pessoal_primeiraClass" class="container">
        <div class="row">
          <div class="col-md-6">
            <p>
              Muitas pessoas LGBTQIA+ no centro de São Paulo precisam de apoio,
              para se defender de violências sofridas. Mas muitas dessas pessoas
              não conseguem acessar esse tipo serviço. Seja por falta de grana,
              por falta de um serviço personalizado, falta de tempo ou até mesmo
              falta de acesso à informação.
            </p>
            <h3>
              <br />
              Por isso criamos o Assegura LGBTQIA+{" "}
            </h3>
          </div>
          <div class="col-md-6">
            <img src={img01} class="img-fluid" />
          </div>
        </div>
      </section>

      <section id="pg_defesa_pessoal_segundaClass" class="container-fluid my-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12 py-5">
              <p>
                Por isso, vamos através de Informações e Parcerias com
                Professores e Escolas de Defesa Pessoal, conectar quem precisa
                de acesso a esse serviço com Profissionais e Ambientes seguro,
                livre de assédio, livre de discriminações, em que as pessoas
                possam desenvolver suas potencialidades em um clima de respeito,
                amizade e colaboração, buscando assegurar a comunidade LGBTQIA+.
              </p>
              <p>
                Nosso diferencial, é que além de promover essa conexão, também
                vamos disponibilizar na nossa plataforma, vídeos com aulas
                básicas gratuitas.{" "}
              </p>
            </div>
          </div>
          <div>
            <div class="row py-4">
              <div class="col-md-6">
                <img src={img02} class="img-fluid" />
              </div>
              <div class="col my-5">
                <p>
                  Pesquisas mostram que pessoas treinadas para responder
                  adequadamente a um ataque, podem até mesmo impedir que
                  agressões aconteçam, pois, reagem ao perigo de forma mais
                  assertiva e confiante, aumentando as chances de evitar
                  situações violentas ou enfrentá-las com segurança.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid terceiraClass">
        <div class="container">
          <div class="row my-3">
            <div class="col">
              <p class="text-center">
                Você que é alvo de violência deve saber se defender, isto é
                empoderamento, é ser livre, <br /> é não viver refém do medo.
              </p>
              <h3 class="text-center">Vídeos com Aulas de Defesa Pessoal</h3>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <iframe
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/HF8NxF1QYh0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-3">
              <iframe
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/kxnjvWnpnxQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-3">
              <iframe
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/rSmerT0ZpFI"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-3">
              <iframe
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/C14myVELhnE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid quartaClass">
        <div class="container">
          <div class="row my-3">
            <div class="col">
              <h3>Artigos sobre Defesa Pessoal</h3>
            </div>
          </div>

          <div class="row">
            {posts.map((item) => (
              <div class="col-md-3" key={item.id}>
                <img
                  src={item.image}
                  class="mr-3 img-fluid"
                  alt={item.title}
                />
                <h5 class="mt-0">
                    {item.title}
                </h5>
                <p>
                {item.content}
                </p>
                <a
                  class="btn btn-primary"
                  target="_blank"
                  href={item.link}
                  role="button"
                >
                  Leia Mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
