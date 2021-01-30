import { Container } from "react-bootstrap";

import './banner.css'


const Banner = () => {
  return (
    <Container fluid>
      <section id="pg_acolhimento_banner">
        <Container>
          <div>
            <h1 className="line typing-animation">
              Principais Casas de Acolhimento SP
            </h1>
            
            <p>
              Quando se é uma pessoa LGBTI+, a própria casa pode representar uma
              ameaça ou oferecer perigo. Segundo levantamento mais recente do
              Grupo Gay da Bahia (GGB), 35,5% das lésbicas, gays, bissexuais,
              travestis e transexuais assassinadas em 2019 foram mortas em suas
              residências. Sem o apoio e aceitação de suas famílias, muitos
              membros da comunidade LGBTI+ encontram nas ruas o acolhimento e
              amparo que está em falta no lar. Pelo Brasil, as chamadas casas de
              acolhimento para pessoas LGBTI+ auxiliam com apoio e moradia.
            </p>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default Banner;