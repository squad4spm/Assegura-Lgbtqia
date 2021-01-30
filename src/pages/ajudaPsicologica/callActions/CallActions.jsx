import { Container, Button } from "react-bootstrap";

import "./callActions.css";

import psicologico3 from "../../../assets/images/psicologico3.jpg";

const CallActions = () => {
  return (
    <Container fluid>
      <section id="pg_sobre_psicologia_callAction">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <img src={psicologico3} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-6 text-center">
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

export default CallActions;