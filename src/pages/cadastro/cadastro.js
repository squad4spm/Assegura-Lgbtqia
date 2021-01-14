import React from 'react';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./cadastro.css";


export default () => {
  return(
    <Form>
        <Container>
        
            <h1>Por Gentileza Preencha todos os Dados Abaixo:</h1>

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
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Endereço</Form.Label>
                <Form.Control placeholder="Ex: Rua xxxx 1234" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Complemento</Form.Label>
                <Form.Control placeholder="Apartmento, studio, or piso, síto" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control placeholder="Digite sua cidade"></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Escolha...</option>
                        <option>São Paulo</option>
                        <option>Rio de Janeiro</option>
                        <option>Outro</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control placeholder="0000-000"></Form.Control>
                </Form.Group>
            </Form.Row>
            
            <Form.Row>
                
                <Form.Group as={Col}>
                    <Form.File id="exampleFormControlFile1" label="Escolha uma foto de perfil" />
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    Enviar
            </Button>
            </Form.Row>
            
        </Container>
    </Form>
  );
};