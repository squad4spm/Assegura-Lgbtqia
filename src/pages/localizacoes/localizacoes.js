import "./localizacoes.css"
import React from "react";
//import { useHistory } from 'react-router-dom';
import { Container, Dropdown } from "react-bootstrap";

import img01 from "../../assets/images/markerDefesa.png";
import img02 from "../../assets/images/markerNome.png";
import img03 from "../../assets/images/markerCasaAcolhimento.png";
import img04 from "../../assets/images/markerJuridico.png";
import img05 from "../../assets/images/markerP.png";

import Feedback  from "../../components/layout/feedback/feedback";

const Localizacoes = () => {
  //const history = useHistory();

  return (
    <Container fluid>
      <section id="pg_localizacao">
        <div className="center">
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img01} alt="" width="50px" />Defesa pessoal
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">CRD - Centro de Referência e Defesa da Diversidade</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <br />

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img02} alt="" width="50px" />Nome social
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                          </Dropdown.Menu>
                        </Dropdown>
                        <br />

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img03} alt="" width="50px" />Casa de acolhimento
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Casa flor</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Casa chama</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Arouchianos</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Casa 1</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <br />

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img04} alt="" width="50px" />Direitos Lgbtqia+
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">DECRADI - Delegacia de Crimes Raciais e Delitos de Intolerância</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Coordenação de Políticas para a Diversidade Sexual</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Núcleo Especializado de Defesa da Diversidade e da Igualdade Racial - Defensoria Pública do Estado de São Paulo</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Ouvidoria da Secretaria da Justiça e Cidadania</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <br />

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img05} alt="" width="50px" />Psicológico
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Centro de Cidadania LGBTI Laura Vermont (Região Leste)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Centro de Cidadania LGBTI Luana Barbosa dos Reis</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Centro de Cidadania LGBTI Claudia Wonder (Zona Oeste)</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Ambulatório de Transtorno de Identidade de Gênero e Orientação Sexual (AMTIGOS)</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">Ambulatório do Núcleo de Assistência Multiprofissional à Pessoa Trans da Unifesp</Dropdown.Item>
                            <Dropdown.Item href="#/action-6">Ambulatório de Saúde Integral de Travestis e Transexuais – Centro de Referência e Treinamento DST/AIDS</Dropdown.Item>
                            <Dropdown.Item href="#/action-7">Centro de Cidadania LGBTI Edson Neris (Zona Sul)</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    
                    <div className="col-md-8 google-maps">
                    <iframe title="mapa" src="https://www.google.com/maps/d/embed?mid=1vF4oeGJEHx0F0Xt6MwO1CbRC_fud4VuW" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Feedback />
    </Container>
  );
};

export default Localizacoes;