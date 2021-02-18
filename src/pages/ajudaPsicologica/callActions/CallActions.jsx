import { Container, Button } from "react-bootstrap";

import "./callActions.css";

import psicologico3 from "../../../assets/images/Acolhe_LGBT.png";

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
                <p>O Acolhe LGBT+ é uma plataforma que conecta pessoas LGBT+ que precisam de acolhimento psicológico com profissionais que topem ajudá-las de forma voluntária.</p>
                <Button onClick={() => window.open("https://www.acolhelgbt.org/", "_blank")}variant="outline-success">Acolhe LGBT+  |  Acesse Agora
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default CallActions;