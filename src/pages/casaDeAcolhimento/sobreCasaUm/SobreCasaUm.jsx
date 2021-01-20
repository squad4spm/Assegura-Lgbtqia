import { Container } from "react-bootstrap";

import casa1 from "../../../assets/images/casa1.jpg";

import "./sobreCasaUm.css";

export default () => {
  return (
    <Container>
      <section id="pg_acolhimento_casaUm" class="container">
        <div class="row">
          <div class="col-md-9">
            <h3>CASA 1</h3>
            <p>
              Pioneira no Brasil, a Casa 1 é um centro de acolhida de jovens
              LGBTI+ expulsos de casa pela família, um centro cultural e uma
              clínica social que atua no centro da cidade de São Paulo. O
              projeto conta com programações socioeducativas e disponibiliza ao
              público atendimentos psicoterápicos gratuitos ou de baixo custo.
              Aproximadamente 3.500 pessoas são atendidas mensalmente pelos
              projetos da casa.
            </p>
          </div>
          <div class="col-md-3">
            <img src={casa1} class="img-fluid" />
          </div>
        </div>
      </section>
    </Container>
  );
};
