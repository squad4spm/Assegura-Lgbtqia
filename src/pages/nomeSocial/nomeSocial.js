import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

import { Container } from "react-bootstrap";
import "./nomeSocial.css";

import img01 from "../../assets/images/unnamed2.png";
import img02 from "../../assets/images/imgser.jpg";

const Image =styled.img`
width: 100%;
`;

const NomeSocial = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://app-toplojavirtual-com-br.umbler.net/post/cat/3")
      .then((response) => {
        setPosts(response.data.posts);
      });
  }, []);

  return (
    <Container fluid>
      <section id="pg_defesa_pessoal_banner">
        <div className="jumbotron card card-image d-block nomeSocial">
          <p className="mx-2 mb-4">
            Nome Social <br /> LGBTQIA+
          </p>
        </div>
      </section>

      <section
        id="pg_defesa_pessoal_primeiraClass"
        className="container primeiraClass"
      >
        <div className="row">
          <div className="col-md-6">
            <img src={img01} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6 my-5 mb-0">
            <p>
              Nome social é o nome pelo qual pessoas transexuais, travestis ou
              outros preferem ser chamadas no dia a dia, ao invés de seu nome
              registrado em cartório, que não reflete a sua identidade de
              gênero. O conceito de identidade de gênero faz referência ao
              gênero com o qual a pessoa se identifica, podendo ser feminino,
              masculino, não-binário, entre outros.
            </p>
          </div>
          <div className="col-md-12">
            <p>
              No processo de aceitação e entendimento em relação à identidade de
              gênero de cada um, o nome é uma das questões que têm maior
              impacto, já que os nomes estão diretamente ligados a um conceito
              de masculino e feminino em nossa sociedade. Felizmente, o processo
              para que pessoas trans possam utilizar seu nome social em
              documentos oficiais ficou menos complicado e mais inclusivo.
            </p>
          </div>
        </div>
      </section>

      <section
        id="pg_defesa_pessoal_segundaClass"
        className="container-fluid segundaClass"
      >
        <div className="container imagemNomeSocial">
          <div className="row">
            <div className="col-md-6 my-4 mb-4">
              <p>
                {" "}
                <b> Agora vamos tirar algumas duvidas</b>
              </p>
              <p>
                <b>O que pode ser alterado?</b>Conforme a regulamentação, podem
                ser alterados o prenome, agnomes indicativos de gênero (filho,
                júnior, neto e etc.) e o gênero em certidões de nascimento e de
                casamento (com a autorização do cônjuge).{" "}
              </p>
              <p>
                <b>
                  Preciso fazer a alteração no cartório em que fui registrado?
                </b>
                Não. O pedido pode ser realizado em qualquer cartório de
                Registro Civil de Pessoas Naturais em todo território nacional.
                O cartório que fizer a alteração deverá encaminhar via sistema
                eletrônico o procedimento ao cartório que registrou o nascimento
                da pessoa.
              </p>
              <p>
                <b> É possível solicitar a gratuidade do procedimento?</b>Caso o
                interessado na mudança não tenha condições de arcar com os
                custos do procedimento, ele pode solicitar a gratuidade no
                cartório . Para isso, basta apresentar a declaração de
                hipossuficiência – documento necessário para obter assistência
                judiciária gratuita. Caso deseje, o cidadão que deseja realizar
                as mudanças pode contatar a Defensoria Pública de seu estado
                para conseguir a gratuidade.
              </p>
            </div>
            <div className="col-md-6 my-5 mb-0">
              <img src={img02} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container terceiraClass">
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <p className="text-center">
                Separamos aqui alguns videos com mais informaçoes sobre o
                processo{" "}
              </p>
              <h3 className="text-center">Vídeos</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <iframe
                title="video1"
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/3oqztdVbivk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-3">
              <iframe
                title="video2"
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/hRD_xTbIgYc"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-3">
              <iframe
                title="video3"
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/sBKF5va4nRI"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-3">
              <iframe
                title="video4"
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/1NOetBCF_pw"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid quartaClass">
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <h3>Artigos sobre, Retificação de Nome Social e Documentação </h3>
            </div>
          </div>

          <div className="row">
            {posts.map((item) => (
              <div className="col-md-3">
                <Image
                  src={item.image}
                  className="mr-3 img-fluid"
                  alt={item.title}
                />
                <h5 className="mt-0">
                 {item.title}
                </h5>
                <p>
                {item.content}
                </p>
                <a
                  className="btn btn-primary"
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
}

export default NomeSocial;