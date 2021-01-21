import { Container } from "react-bootstrap";

import ajudar from "../../../assets/images/ajudar.jpg";
import preciso from "../../../assets/images/precisoajuda.jpg";
import match from "../../../assets/images/match.jpg";

import "./works.css";

export default () => {
  return (
    <Container>
      <section id="pg_sobre_psicologia_works">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="text-center">COMO FUNCIONA</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <img src={ajudar} />
              <h3>QUERO AJUDAR!</h3>
              <p>
                Profissionais de psicologia que topem ajudar de forma voluntária
                se cadastram, indicando onde estão.
              </p>
            </div>
            <div class="col-md-4">
              <img src={preciso} />
              <h3>PRECISO DE AJUDA!</h3>
              <p>
                Pessoas LGBTQIA+ que precisam de acolhimento psicológico se
                cadastram pela plataforma, indicando onde estão.
              </p>
            </div>
            <div class="col-md-4">
              <img src={match} />
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
  );
};
