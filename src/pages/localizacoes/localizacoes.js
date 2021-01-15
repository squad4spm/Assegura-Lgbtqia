import "./localizacoes.css"
import {React, useState} from "react";
import { Container, Dropdown, FormControl } from "react-bootstrap";

import MapContainer from "../../components/layout/maps/maps.js";

import img01 from "../../assets/images/markerDefesa.png";
import img02 from "../../assets/images/markerNome.png";
import img03 from "../../assets/images/markerCasaAcolhimento.png";
import img04 from "../../assets/images/markerJuridico.png";
import img05 from "../../assets/images/markerP.png";

export default () => {

  return (
    <Container fluid>
      <section id="pg_localizacao">
        <div class="center">
            <div class="container">
                <div class="row my-5">
                    <div class="col-md-4">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img01} alt="" width="50px" />Defesa pessoal
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <br />

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img02} alt="" width="50px" />Nome social
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
                            <Dropdown.Item href="#/action-3">Casa 1</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <br />

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img04} alt="" width="50px" />Direitos Lgbtqia+
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <br />

                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <img src={img05} alt="" width="50px" />Psicológico
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    
                    <div class="col-md-8">
                        <MapContainer />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </Container>
  );
};