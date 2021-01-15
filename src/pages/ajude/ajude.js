import "./ajude.css"
import React from 'react';
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import img01 from "../../assets/images/ajude02.jpg";
import img02 from "../../assets/images/ajude04.jpg";
import img03 from "../../assets/images/ajude05.jpg";
import img04 from "../../assets/images/ajude08.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
    <Container fluid>
    <section id="pg_defesa_pessoal_banner" >
        <div class="jumbotron card card-image  d-block ajude">
            <p class="mx-2 mb-4">Ajude Nossa <br /> Causa!</p>
        </div>
    </section>

    <section id="pg_defesa_pessoal_primeiraClass" class="container">
        <div class="row">
            <div class="col-md-6">
                <p>Com o intuito de ajudar as pessoas da comunidade LGBTQIA+ em situação de vulnerabilidade social, criamos meios que você pode de forma totalmente voluntária ajudar nessa missão tão importante que é vivermos em um país inclusivo onde todas as pessoas podem expressar suas vontades normalmente sem serem ofendidas pela sua orientação sexual.</p>
            </div>
            <div class="col-md-6">""
                <img src={img01} class="img-fluid" alt=""/>
            </div>
        </div>
    </section>

    <section id="pg_defesa_pessoal_segundaClass" class="container-fluid my-4">
        <div class="container">
            <div class="row">
                <div class="col-md-12 py-5">
                    <p>Pensando nisso, nasceu o ASSEGURA que tem como objetivo principal contribuir por meio da informação, a segurança preventiva contra a violência das pessoas que fazem parte da comunidade LGBTQIA+ em diversos âmbitos da sociedade, seja ela física ou psicológica.</p>
                    <p>Vamos nessa? Fique à vontade para contribuir da maneira que se sentir mais confortável e vamos juntos nessa corrente do bem. </p>
                </div>
            </div>
            <div>
                <div class="row py-4">
                    <div class="col-md-6">
                        <img src={img02} class="img-fluid" alt=""/>
                    </div>
                    <div class="col my-5">
                        <p>Por que ajudar? O Brasil é o país que mais sofre com a violência contra a comunidade LGBTQIA+, para mudarmos esse triste cenário que tal unirmos forças para combatermos essa realidade? O ASSEGURA LGBTQIA+ conta com sua contribuição para cada vez mais vivermos em um país mais inclusivo e melhor para todos :D</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid terceiraClass">
    <Form>
        <Container>
        
            <h1>Seja um Voluntário dos nossos parceiros:</h1>

            <Form.Row>
                <Form.Group as={Col} controlId="Primeiro Nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group as={Col} controlId="Sobrenome">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu sobrenome" />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Endereço</Form.Label>
                <Form.Control placeholder="Ex: Rua xxxx 1234" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Complemento</Form.Label>
                <Form.Control placeholder="Apartamento, studio, ou piso, sítio" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control placeholder="Digite sua cidade"></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control placeholder="0000-000"></Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col}>
                    <Form.Label>Voluntário</Form.Label>
                    <Form.Control as="select" defaultValue="Escolha...">
                        <option>Escolha...</option>
                        <option>Voluntário 1</option>
                        <option>Voluntário 2</option>
                        <option>Voluntário 3</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Área</Form.Label>
                    <Form.Control as="select" defaultValue="Escolha...">
                        <option>Escolha...</option>
                        <option>Área 1</option>
                        <option>Área 2</option>
                        <option>Área 3</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Parceiro</Form.Label>
                    <Form.Control as="select" defaultValue="Escolha...">
                        <option>Escolha...</option>
                        <option>Parceiro 2</option>
                        <option>Parceiro 3</option>
                        <option>Parceiro 4</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            
            <Form.Row>                
                <Button type="submit" className="btn-ajuda">
                    Enviar
            </Button>
            </Form.Row>
            
        </Container>
    </Form>
    </section>
    <section class="container-fluid quartaClass">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <h3>Veja abaixo mais informações de como você pode ajudar a comuidade LGBTQIA+</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <img src={img03} class="mr-3 img-fluid" alt="Conheça a primeira Trans faixa-preta de Jiu-Jitsu" />
                    
                </div>

                <div class="col-md-3">
                
                    <h5 class="mt-0">Saiba como AJUDAR!</h5>
                    <p>Contribua com nossa causa e ajude as pessoas que estão em situação de vulnerabilidade social da nossa comunidade. Confira ao lado como colaborar....</p>
                </div>

                <div class="col-md-3">
                    <img src={img04} class="mr-3 img-fluid" alt="“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?" /> 
                </div>

                <div class="col-md-3">
                    
                    <h5 class="mt-0">Doar Faz Bem</h5>
                    <h6>Banco Santander <br />
                    <h6>Ag - 0000 <br />
                    Cc - 00000-0</h6> <br />
                    </h6>
                    <h6>Banco Itaú <br />
                    <h6>Ag - 0000 <br />
                    Cc - 00000-0</h6> <br />
                    </h6>
                </div>
            </div>
        </div>
    </section>
    </Container >
  );
};