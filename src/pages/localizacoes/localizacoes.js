import "./localizacoes.css"
import { Container } from "react-bootstrap";

import img01 from "../../assets/images/markerDefesa.png";
import img02 from "../../assets/images/markerNome.png";
import img03 from "../../assets/images/markerCasaAcolhimento.png";
import img04 from "../../assets/images/markerJuridico.png";
import img05 from "../../assets/images/markerP.png";

export default () => {
  return (
    <Container>
      <section id="pg_localizacao">
        <div class="center">
            <div class="container">
                <div class="row my-5">
                    <div class="col-md-4">
                        <p><img src={img01} alt="" width="50px" />Defesa pessoal</p>
                        <br />
                        <p><img src={img02} alt="" width="50px" />Nome social</p>
                        <br />
                        <p><img src={img03} alt="" width="50px" />Casa de acolhimento</p>
                        <br />
                        <p><img src={img04} alt="" width="50px" />Direitos Lgbtqia+</p>
                        <br />
                        <p><img src={img05} alt="" width="50px" />Psicológico</p>
                    </div>
                    
                    <div class="col-md-8">
                        <div class="mapa" id="mapa"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </Container>
  );
};