import {Container} from 'react-bootstrap'

import casa_chama from "../../../assets/images/casa_chama.jpg";

import "./sobreCasaChama.css"

export default () => {
  return (
    <Container>
      <section id="pg_acolhimento_casaChama" class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>
              <br />
              CASA CHAMA
            </h3>
            <p>
              A Casa Chama é uma organização civil que surgiu em 2018 com o
              objetivo de fortalecer a comunidade de artistas trans por meio de
              atendimentos de saúde, projetos culturais e assistências
              jurídicas. A casa é um ambiente de convívio seguro que produz
              desde eventos culturais e grupos de estudo até projetos de cuidado
              e apoio jurídico. Durante a pandemia, o órgão atua com a criação
              de um fundo emergencial de apoio para pessoas trans afetadas pelo
              covid-19 e assistidas pelo projeto.
            </p>
          </div>
          <div class="col-md-6">
            <img src={casa_chama} class="img-fluid" />
          </div>
        </div>
      </section>
    </Container>
  );
};
