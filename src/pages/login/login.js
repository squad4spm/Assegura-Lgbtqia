import React from 'react';
import { Container, Form, Button, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./login.css";

import Cadastro from "../cadastro/cadastro.js";

import user from "../../assets/images/userProfile.png";

export default ()  => {
  return(
    <Container class="my-4 mx-5">
      <Row class="coluna no-gutters">
        <div class="col-lg-5">
            <img src= {user} class="img-fluid" alt="" />
            <p>Não tem uma conta? <Link to="Cadastro">Registre-se</Link></p>
        </div>
        <div class="col-lg-7">
          <Form>
            <Form.Group contolId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
                <Form.Text className="text-muted">Dados confidenciais</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasciPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"  />
            </Form.Group>
            <Button variant="dark" type="submit">Entrar</Button>
            <Link to="#">Esqueceu a Senha?</Link>
          </Form>
        </div>
      </Row>
    </Container>
  );
};
