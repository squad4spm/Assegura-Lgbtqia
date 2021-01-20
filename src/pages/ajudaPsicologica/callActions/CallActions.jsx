import { Container, Button } from "react-bootstrap";

import "./callActions.css";

import psicologico3 from "../../../assets/images/psicologico3.jpg";

export default () => {
  return (
    <Container fluid>
      <section id="pg_sobre_psicologia_callAction">
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
  );
};
