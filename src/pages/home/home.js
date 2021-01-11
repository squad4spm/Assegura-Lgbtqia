import "./home.css"
import { Container, Col, Row } from "react-bootstrap";

import img01 from "../../assets/images/markerDefesa.png";
import img02 from "../../assets/images/markerNome.png";
import img03 from "../../assets/images/markerCasaAcolhimento.png";
import img04 from "../../assets/images/markerJuridico.png";
import img05 from "../../assets/images/markerP.png";

export default () => {
  return (
    <Container>
        <Row>
            <Col xs={2} className="left">left</Col>
            <Col xs={8} className="middle">
                <div class="navbar">
                    <img src="./images/logoAssegura.png" alt="Logo assegura LGBTQIA+" />
                    <ul class="iconsM">
                        <li class="item">
                            <a href="defesaPessoal.php"><img src="./images/selfDefense.png" alt="house icon" /></a>
                        </li>
                        <li class="item">
                            <a href="nomeSocial.php"><img src="./images/doc.png" alt="law icon" /></a>
                        </li>
                        <li class="item">
                            <a href="localizacao.php"><img src="./images/map.png" alt="icon doc" /></a>
                        </li>
                        <li class="item">
                            <a href="ajude.php"><img src="./images/shake.png" alt="icon" /></a>
                        </li>
                        <li class="item">
                            <img src="./images/house.png" alt="" />
                        </li>
                        <li class="item">
                            <img src="./images/law.png" alt="" />
                        </li>
                        <li class="item">
                            <img src="./images/psicologhy.png" alt="" />
                        </li>
                    </ul>
                </div>
            </Col>
            <Col xs={2} className="right">right</Col>
        </Row>
    </Container>
  );
};