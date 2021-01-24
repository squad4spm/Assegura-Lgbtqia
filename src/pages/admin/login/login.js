import React, {useContext, useState} from 'react';
import { Container, Form, Button, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./login.css";

import user from "../../../assets/images/userProfile.png";

export default ()  => {

  return(
    <Container class="my-4 mx-5" id="contaH">
      <Row class="coluna no-gutters">
        <div class="col-lg-5">
            <img src= {user} class="img-fluid" alt="" />
        </div>
        <div class="col-lg-7">
          <Form>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control name="email" id="email" type="text" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control name="senha" id="senha" type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="dark" type="submit">Entrar</Button>
            <Link to="#">Esqueceu a Senha?</Link>
          </Form>
        </div>
      </Row>
    </Container>
  );
};
