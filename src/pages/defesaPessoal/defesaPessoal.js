import React, { useState, useEffect } from "react";
import axios from "axios";

import "./defesaPessoal.css";
import img01 from "../../assets/images/Defesa.png";
import img02 from "../../assets/images/Defesa_Pessoal.png";
import { Container } from "react-bootstrap";

const DefesaPessoal = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://app-toplojavirtual-com-br.umbler.net/post/cat/2")
      .then((response) => {
        setPosts(response.data.posts);
      });
  }, []);

  return (
    <Container fluid>
      <section id="pg_defesa_pessoal_banner">
        <div className="jumbotron card card-image d-block">
          <p className="mx-2 mb-4">
            Defesa Pessoal <br /> LGBTQIA+
          </p>
        </div>
      </section>

      <section id="pg_defesa_pessoal_primeiraClass" className="container">
        <div className="row">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <img src={img01} className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section id="pg_defesa_pessoal_segundaClass" className="container-fluid my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
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
            <div className="row py-4">
              <div className="col-md-6">
                <img src={img02} className="img-fluid" alt="" />
              </div>
              <div className="col my-5">
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

      <section className="container-fluid terceiraClass">
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <p className="text-center">
                Você que é alvo de violência deve saber se defender, isto é
                empoderamento, é ser livre, <br /> é não viver refém do medo.
              </p>
              <h3 className="text-center">Vídeos com Aulas de Defesa Pessoal</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <iframe
                title="video1"
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/HF8NxF1QYh0"
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
                src="https://www.youtube.com/embed/kxnjvWnpnxQ"
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
                src="https://www.youtube.com/embed/rSmerT0ZpFI"
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
                src="https://www.youtube.com/embed/C14myVELhnE"
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
              <h3>Artigos sobre Defesa Pessoal</h3>
            </div>
          </div>

          <div className="row">
            {posts.map((item) => (
              <div className="col-md-3" key={item.id}>
                <img
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
};

export default DefesaPessoal;