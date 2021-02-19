import React, { useState, useEffect } from "react";
import axios from "axios";

import "./defesaPessoal.css";
import ImagemMobile from "../../assets/images/banner_defesa_mobile.fw.png";
import img01 from "../../assets/images/Defesa.png";
import img02 from "../../assets/images/Defesa_Pessoal.png";
import { Container } from "react-bootstrap";

import Feedback  from "../../components/layout/feedback/feedback";

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
      <section id="pg_defesa_pessoal_banner" className="visible_desktop">
        <div className="jumbotron card card-image d-block">
          <p className="mx-2 mb-4">
            Defesa Pessoal <br /> LGBTQIA+
          </p>
        </div>
      </section>
      
      <section fluid className="visible_mobile">
        <img className="img-fluid" src={ImagemMobile} alt="Banner Principal da Página de Defesa Pessoal" />
      </section>

      <section id="pg_defesa_pessoal_primeiraClass" className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              Pessoas LGBTQIA+ precisam de apoio, para se defender das violências sofridas no dia a dia e também resinificar essas experiências, para terem reações mais assertivas e mais seguras. Formas de se pensar sobre isso são abordadas em aulas de defesa pessoal, além de técnicas corporais de defesa. 
            </p>
            <h3>
              <br />
              Pensando em acessibilidade e também em ambientes seguros de aprendizado.{" "}
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
                Nossos parceirxs disponibilizam informações muito importantes, sobre cultura e aulas, e nós da Assegura, buscamos conectar quem precisa e busca por esse serviço, com Profissionais e Ambientes seguros, livres de assédio, livres de discriminações, em que as pessoas possam desenvolver técnicas de defesa pessoal em um clima de respeito, amizade e colaboração, e levando mais segurança para comunidade LGBTQIA+  em um contexto geral.
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
                  Pesquisas mostram que pessoas treinadas para responder adequadamente a um ataque, podem até mesmo impedir que agressões aconteçam, pois, reagem ao perigo de forma mais assertiva e confiante, aumentando as chances de evitar situações violentas ou enfrentá-las com segurança.{" "}
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-3">
              <iframe
                title="video2"
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/kxnjvWnpnxQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-3">
              <iframe
                title="video3"
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/rSmerT0ZpFI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-3">
              <iframe
                title="video4"
                width="100%"
                height="160"
                src="https://www.youtube.com/embed/C14myVELhnE"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
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
            {posts.map((item, key) => (
              <div className="col-md-3" key={key}>
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
      <Feedback />
    </Container>
  );
};

export default DefesaPessoal;