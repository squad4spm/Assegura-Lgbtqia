import "./casaDeAcolhimento.css";
import casa_chama from "../../assets/images/casa_chama.jpg";
import casa_florecer from "../../assets/images/casa_florecer.jpg";
import casa1 from "../../assets/images/casa1.jpg";
import { Container } from "react-bootstrap";
import { MyContext } from "../../contexts/MyContext";

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export default () => {

  return (
    
    <>
      <Container fluid>
        <section id="pg_casas_de_acolhimento_banner">
          <div>
            <h1 className="line typing-animation">Principais Casas de Acolhimento SP</h1>
            <p></p>
            <p>
              Quando se é uma pessoa LGBTI+, a própria casa pode representar uma
              ameaça ou oferecer perigo. Segundo levantamento mais recente do
              Grupo Gay da Bahia (GGB), 35,5% das lésbicas, gays, bissexuais,
              travestis e transexuais assassinadas em 2019 foram mortas em suas
              residências. Sem o apoio e aceitação de suas famílias, muitos
              membros da comunidade LGBTI+ encontram nas ruas o acolhimento e
              amparo que está em falta no lar. Pelo Brasil, as chamadas casas de
              acolhimento para pessoas LGBTI+ auxiliam com apoio e moradia.
            </p>
          </div>
        </section>
      </Container>

      <Container>
        <section id="pg_casas_de_acolhimento_primeiraClass" class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>
                <br />
                CASA CHAMA
              </h3>
              <p>
                A Casa Chama é uma organização civil que surgiu em 2018 com o
                objetivo de fortalecer a comunidade de artistas trans por meio
                de atendimentos de saúde, projetos culturais e assistências
                jurídicas. A casa é um ambiente de convívio seguro que produz
                desde eventos culturais e grupos de estudo até projetos de
                cuidado e apoio jurídico. Durante a pandemia, o órgão atua com a
                criação de um fundo emergencial de apoio para pessoas trans
                afetadas pelo covid-19 e assistidas pelo projeto.
              </p>
            </div>
            <div class="col-md-6">
              <img src={casa_chama} class="img-fluid" />
            </div>
          </div>
        </section>
      </Container>

      <Container fluid>
        <section id="pg_casas_de_acolhimento_segundaClass">
          <Container>
            <div class="row">
              <div class="col-md-3">
                <img src={casa_florecer} class="img-fluid" />
              </div>
              <div class="col-md-9">
                <h3>
                  <br />
                  CASA FLORECER
                </h3>
                <p>
                  Criada em 2016, a Casa Florescer é o primeiro centro de
                  acolhida exclusivo para mulheres trans e travestis em situação
                  de vulnerabilidade social. O projeto tem como objetivo não
                  apenas acolher, mas também reverter o quadro com atendimento
                  social e psicológico. Articulações com as redes de apoio
                  garantem o acesso à alimentação, cursos de qualificação,
                  regularização de documentos e acompanhamento médico capacitado
                  para todas as beneficiadas.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="pg_casas_de_acolhimento_terceiraClass" class="container">
          <div class="row">
            <div class="col-md-9">
              <h3>
                CASA 1
              </h3>
              <p>
                Pioneira no Brasil, a Casa 1 é um centro de acolhida de jovens
                LGBTI+ expulsos de casa pela família, um centro cultural e uma
                clínica social que atua no centro da cidade de São Paulo. O
                projeto conta com programações socioeducativas e disponibiliza
                ao público atendimentos psicoterápicos gratuitos ou de baixo
                custo. Aproximadamente 3.500 pessoas são atendidas mensalmente
                pelos projetos da casa.
              </p>
            </div>
            <div class="col-md-3">
              <img src={casa1} class="img-fluid" />
            </div>
          </div>
        </section>
        </Container>


        <Container fluid>
        <section id="pg_casas_de_acolhimento_quartaClass">
          <Container>
          <div class="row">
            <div class="col-md-4">
              <h5 class="mt-0">Casa Chama</h5>
              <p>Redes Sociais</p>
              <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
                <FaFacebookSquare
                  id="iconsLeft"
                  onClick={() =>
                    window.open("https://www.facebook.com/casachama440/")
                  }
                />
                <FaInstagramSquare
                  id="iconsLeft"
                  onClick={() =>
                    window.open("https://www.instagram.com/casachama_org/")
                  }
                />
              </IconContext.Provider>
              <p></p>
              <p>Contatos</p>
              <p>+55 11 2565 2074</p>
              <p>+55 11 99448 2641</p>
            </div>

            <div class="col-md-4">
              <h5 class="mt-0">Casa Florecer</h5>
              <p>Redes Sociais</p>
              <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
                <FaFacebookSquare
                  id="iconsLeft"
                  onClick={() =>
                    window.open("https://www.facebook.com/casaflorescer/")
                  }
                />
                <FaInstagramSquare
                  id="iconsLeft"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/casaflorescer_/?hl=pt-br"
                    )
                  }
                />
              </IconContext.Provider>
              <p></p>
              <p>Contatos</p>
              <p>+55 11 3456 7890</p>
            </div>

            <div class="col-md-4">
              <h5 class="mt-0">Casa 1</h5>
              <p>Redes Sociais</p>
              <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
                <FaFacebookSquare
                  id="iconsLeft"
                  onClick={() =>
                    window.open("https://www.facebook.com/casaum/")
                  }
                />
                <FaInstagramSquare
                  id="iconsLeft"
                  onClick={() =>
                    window.open("https://www.instagram.com/casa1/")
                  }
                />
              </IconContext.Provider>
            </div>
          </div>
          </Container>
        </section>
      </Container>
    </>
    
  );
};
