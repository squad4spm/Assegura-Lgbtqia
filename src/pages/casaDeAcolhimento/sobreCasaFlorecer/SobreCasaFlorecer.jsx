import { Container } from "react-bootstrap";

import casa_florecer from "../../../assets/images/casa_florecer.jpg";

import "./sobreCasaFlorecer.css";

export default () => {
  return (
    <section id="pg_acolhimento_casaflorecer">
      <Container>
        <div className="row">
          <div className="col-md-3">
            <img src={casa_florecer} className="img-fluid" alt="" />
          </div>
          <div className="col-md-9">
            <h3>
              <br />
              CASA FLORECER
            </h3>
            <p>
              Criada em 2016, a Casa Florescer é o primeiro centro de acolhida
              exclusivo para mulheres trans e travestis em situação de
              vulnerabilidade social. O projeto tem como objetivo não apenas
              acolher, mas também reverter o quadro com atendimento social e
              psicológico. Articulações com as redes de apoio garantem o acesso
              à alimentação, cursos de qualificação, regularização de documentos
              e acompanhamento médico capacitado para todas as beneficiadas.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
