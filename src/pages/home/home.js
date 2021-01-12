import "./home.css"
import { Container, Col, Row } from "react-bootstrap";

import imglogo from "../../assets/images/logoAssegura.png";

import img01 from "../../assets/images/selfDefense.png";
import img02 from "../../assets/images/doc.png";
import img03 from "../../assets/images/map.png";
import img04 from "../../assets/images/shake.png";
import img05 from "../../assets/images/house.png";
import img06 from "../../assets/images/law.png";
import img07 from "../../assets/images/psicologhy.png";

export default () => {
  return (
    <Container fluid>
        <Row id="bcg">
            <Col xs={3} className="left">
                <div class="descricaoH">
                    <h2>Psicológico</h2>
                    <p class="textoCards">
                        Cadastro Para Psicólogos Voluntários
                        <br />
                        Cadastro Para Conseguir Atendimento  
                    </p>
                </div>
            </Col>

            <Col xs={6} className="middle">
                <div class="circlenav">
                    <img src={imglogo} class="logo" />
                    <ul class="iconsM">
                        <li class="item">
                            <a href="defesaPessoal.php"><img src={img01} /></a>
                        </li>
                        <li class="item">
                            <a href="nomeSocial.php"><img src={img02} /></a>
                        </li>
                        <li class="item">
                            <a href="localizacao.php"><img src={img03} /></a>
                        </li>
                        <li class="item">
                            <a href="ajude.php"><img src={img04} /></a>
                        </li>
                        <li class="item">
                            <img src={img05} />
                        </li>
                        <li class="item">
                            <img src={img06} />
                        </li>
                        <li class="item">
                            <img src={img07} />
                        </li>
                    </ul>
                </div>
            </Col>

            <Col xs={3} className="right">
                <div class="descricaoA">
                    <h2>Defesa Pessoal</h2>
                    <p class="textoCards">
                        Pesquisas mostram que uma pessoa treinada para responder adequadamente a um ataque, 
                        pode até mesmo impedir que a agressão comece, pois, reagem ao perigo de forma mais assertiva e confiante, 
                        aumentando as chances de evitar situações violentas ou enfrentá-las com segurança. 
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
  );
};