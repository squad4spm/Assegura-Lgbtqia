import "./userProfile.css"
import React, {useContext} from 'react';
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import {MyContext} from '../../contexts/MyContext';
import userProfile from "../../assets/images/userProfile.png";

export default () => {
    const history = useHistory();

    return (
    <Container>
    <Row className="linha">
        <Col lg={6} className="coluna1">
            <Image src={userProfile} roundedCircle className="profileImg" />
            <p>Usuário</p>
            <Button className="botaoEditL">Logout</Button>
        </Col>
        
        <Col lg={6} >
            <Row className="coluna2">
                <Form.Row>
                    <Form.Group as={Col} controlId="Primeiro Nome"  xs={12} lg={12}>
                        <Form.Label id="formLabel">Nome:</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Sobrenome" lg={12}>
                        <Form.Label id="formLabel">Sobrenome:</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu sobrenome" disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dataNascimento" lg={12}>
                        <Form.Label id="formLabel">Data de nascimento:</Form.Label>
                        <Form.Control type="text" placeholder="DD/MM/AAAA" disabled />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" xs={12} lg={12}>
                        <Form.Label id="formLabel">Email:</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState" lg={12}>
                        <Form.Label id="formLabel">Tipo de cadastro:</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." disabled>
                            <option>Voluntário</option>
                            <option>Parceiro</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword" lg={12}>
                        <Form.Label id="formLabel">Senha:</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" lg={12}>
                        <Form.Label id="formLabel">Confirme a senha:</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                </Form.Row>
            </Row>    
            
            <Row className="coluna2">
                <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1" lg={12}>
                    <Form.Label id="formLabel">Endereço:</Form.Label>
                    <Form.Control placeholder="Ex: Rua xxxx 1234" />
                </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress2" lg={12}>
                        <Form.Label id="formLabel">Complemento:</Form.Label>
                        <Form.Control placeholder="Apartmento, studio, piso ou sitio" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity" xs={12} lg={12}>
                        <Form.Label id="formLabel">Cidade:</Form.Label>
                        <Form.Control placeholder="Digite sua cidade"></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" xs={12} lg={12}>
                        <Form.Label id="formLabel">Estado:</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>São Paulo</option>
                            <option>Rio de Janeiro</option>
                            <option>Outro</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip" xs={12} lg={12}>
                        <Form.Label id="formLabel">CEP :</Form.Label>
                        <Form.Control placeholder="0000-000"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button className="botaoEdit">Salvar alterações</Button>
            </Row>
        </Col>
    </Row>
    </Container>
    );
};