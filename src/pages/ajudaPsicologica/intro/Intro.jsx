import { Container } from "react-bootstrap";

import './intro.css'

import psicologico2 from "../../../assets/images/psicologico2.jpg";

const Intro = () => {
  return (
    <Container>
      <section id="#pg_sobre_psicologia_intro">
        <div className="row">
          <div className="col-md-6">
            <h3>
              <br />
              Pessoas Precisando
            </h3>
            <p>
            “Cuidar da saúde mental não é um luxo, é uma necessidade, principalmente quando as relações familiares estão desgastadas e não oferecem refúgio, quando os equipamentos do Estado estão sendo desmontados”
              a realidade de muitas pessoas LGBTs  que buscam na terapia auxílio, escuta e acolhimento, mas nem sempre conseguem um ambiente seguro.
              -Violência dentro do consultório-
              A psicóloga Beatriz Machado conta que é comum ouvir de pacientes LGBTs violências sofridas dentro dos consultórios, que relatam não terem tido suas queixas e dores legitimadas no espaço terapêutico em relação à LGBTfobia. “Isso é o equivalente a apanhar. Procurar um lugar seguro e lá ser surrado novamente”.
              Falar em saúde mental para população LGBT+ , é fundamental, principalmente quando falamos em populações historicamente discriminadas, que sofrem pelos fatores sociais ligados aos preconceitos.
              Muitas pessoas LGBTQIA+ em São Paulo precisam de apoio psicológico. Mas muitas dessas pessoas não conseguem acessar esse tipo de serviço. Seja por falta de grana, por falta de vagas ou por não encontrarem um ambiente seguro. 
              Pensando nisso nos da Assegura LGBTQIA+ buscamos conectar pessoas LGBTQIA+ a profissionais de psicologia que queiram atendê-las de forma voluntária ou valor social e promovam um ambiente seguro para todes. 
            </p>
            <a id="link" href="https://observatoriosc.org.br/noticia/cuidar-da-saude-mental-de-negros-e-lgbts-exige-combater-racismo-e-lgbtfobia/">
            Fonte: Observatório da sociedade civil
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img src={psicologico2} className="img-fluid d-inline" alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Intro;