import { Container } from "react-bootstrap";

import ajudar from "../../../assets/images/ajudar.jpg";
import preciso from "../../../assets/images/precisoajuda.jpg";
import match from "../../../assets/images/match.jpg";

import "./works.css";

export default () => {
  return (
    <Container>
      <section id="pg_sobre_psicologia_works">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">COMO FUNCIONA</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img src={ajudar} alt="" />
              <h3>QUERO AJUDAR!</h3>
              <p>
                Profissionais de psicologia que topem ajudar de forma voluntária
                se cadastram, indicando onde estão.
              </p>
            </div>
            <div className="col-md-4">
              <img src={preciso} alt="" />
              <h3>PRECISO DE AJUDA!</h3>
              <p>
                Pessoas LGBTQIA+ que precisam de acolhimento psicológico se
                cadastram pela plataforma, indicando onde estão.
              </p>
            </div>
            <div className="col-md-4">
              <img src={match} alt="" />
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
