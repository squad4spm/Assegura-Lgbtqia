import { Container } from "react-bootstrap";

import './intro.css'

import psicologico2 from "../../../assets/images/psicologico2.jpg";

export default () => {
  return (
    <Container>
      <section id="#pg_sobre_psicologia_intro">
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
  );
};
