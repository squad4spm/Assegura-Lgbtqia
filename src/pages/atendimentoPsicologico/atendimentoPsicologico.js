import { Container, Button } from "react-bootstrap";

import "./atendimentoPsicologico.css";
import psicologico2 from "../../assets/images/psicologico2.jpg";
import psicologico3 from "../../assets/images/psicologico3.jpg";
import casa1 from "../../assets/images/casa1.jpg";
import casa_florecer from "../../assets/images/casa_florecer.jpg";

export default () => {
  return (
    <>
      <Container fluid>
        <section id="pg_atendimento_psicologico_banner">
          <div class="jumbotron card card-image d-block"></div>
        </section>
      </Container>

      <Container>
        <section id="pg_atendimento_psicologico_primeiraClass">
          <div class="row">
            <div class="col-md-6">
              <h3>
                <br />
                Pessoas Precisando
              </h3>
              <p>
                Muitas pessoas LGBTQIA+ em São Paulo precisam de apoio
                psicológico. Mas muita dessas pessoas não conseguem acessar esse
                tipo de serviço. Seja por falta de grana, por falta de vagas.
                Então, pra fazer a conta fechar, queremos conectar pessoas
                LGBTQIA+ a profissionais de psicologia que queiram atendê-las de
                forma voluntária..
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img src={psicologico2} class="img-fluid d-inline" />
            </div>
          </div>
        </section>
      </Container>

      <Container fluid>
        <section id="pg_atendimento_psicologico_segundaClass">
          <Container>
            <div class="row">
              <div class="col-md-6">
                <img src={psicologico3} class="img-fluid" />
              </div>
              <div class="col-md-6 text-center">
                <div className="containerButtonActions">
                  <Button variant="outline-success">QUERO AJUDAR!</Button>
                  <Button variant="outline-success">PRECISO DE AJUDA!</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Container>

      <Container>
        <section id="pg_atendimento_psicologico_terceiraClass">
          <div class="container">
            <div class="row">
              <div class="col">
                <h1 class="text-center">COMO FUNCIONA</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <img src={casa1} />
                <h3>QUERO AJUDAR!</h3>
                <p>
                  Profissionais de psicologia que topem ajudar de forma
                  voluntária se cadastram, indicando onde estão.
                </p>
              </div>
              <div class="col-md-4">
                <img src={casa1} />
                <h3>PRECISO DE AJUDA!</h3>
                <p>
                  Pessoas LGBTQIA+ que precisam de acolhimento psicológico se
                  cadastram pela plataforma, indicando onde estão.
                </p>
              </div>
              <div class="col-md-4">
                <img src={casa1} />
                <h3>DEU "MACTH"!</h3>
                <p>
                  Nossa equipe cruza os dados e conectamos quem precsa de
                  acolhimento psicológico com profissionais que possam ajudar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container fluid>
        <section class="pg_atendimento_psicologico_quartaClass">
          <Container>
            <div class="row my-3">
              <div class="col-md-12 text-center">
                <h3>Artigos sobre Ajuda Psicológica</h3>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 text-center">
                <img
                  src={casa1}
                  class="img-fluid"
                  alt="Conheça a primeira Trans faixa-preta de Jiu-Jitsu"
                />
                <h5 class="mt-0">
                  “Qualquer um pode ser uma ameaça”: no Brasil de Bolsonaro,
                  LGBTs tomam a defesa pessoal com suas próprias mãos
                </h5>
                <p>
                  Em um país com uma das maiores taxas de violência do mundo
                  contra gays e transgêneros, onde as redes sociais...
                </p>
                <Button variant="outline-success" onClick={()=> window.open("https://medium.com/@piranhasteamfc/qualquer-um-pode-ser-uma-amea%C3%A7a-no-brasil-de-bolsonaro-lgbts-tomam-a-defesa-pessoal-com-suas-a9b62555aa0e", '_blank')}>Leia mais</Button>
              </div>

              <div class="col-md-4 text-center">
                <img
                  src={casa1}
                  class="img-fluid"
                  alt="“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?"
                />
                <h5 class="mt-0">
                  “Sem ver diferenças”: É possível diversidade e inclusão nos
                  treinos de artes marciais?
                </h5>
                <p>
                  Uma das minhas partes favoritas do desafio de esgrima deste
                  ano...
                </p>

                <Button variant="outline-success" onClick={()=> window.open("https://medium.com/@piranhasteamfc/sem-ver-diferen%C3%A7as-%C3%A9-poss%C3%ADvel-diversidade-e-inclus%C3%A3o-nos-treinos-de-artes-marciais-c60ab57db6d9", '_blank')}>Leia mais</Button>
              </div>

              <div class="col-md-4 text-center">
                <img
                  src={casa_florecer}
                  class="img-fluid"
                  alt="“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?"
                />
                <h5 class="mt-0">
                  Turmas de Defesa-Pessoal para LGBTs focam no empoderamento
                </h5>
                <p>
                  No 50º aniversário do levante de Stonewall, que deu início ao
                  movimento pela igualdade LGBT, os instrutores locais...
                </p>
                
                <Button variant="outline-success" onClick={()=> window.open("https://medium.com/@piranhasteamfc/sem-ver-diferen%C3%A7as-%C3%A9-poss%C3%ADvel-diversidade-e-inclus%C3%A3o-nos-treinos-de-artes-marciais-c60ab57db6d9", '_blank')}>Leia mais</Button>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </>
  );
};
