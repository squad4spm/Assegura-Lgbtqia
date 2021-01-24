import React, {useContext, useState, useEffect} from 'react';
import { Container, Form, Button, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import "./login.css";

import Cadastro from "../cadastro/cadastro.js";
import {MyContext} from '../../contexts/MyContext';
import user from "../../assets/images/userProfile.png";

export default ()  => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    axios.get("http://app.toplojavirtual.com.br/usuario").then((response) => {
      setUsuario(response.data.usuario);
    });
  }, []);

  return(
    <Container class="my-4 mx-5" id="contaH">
      <Row class="coluna no-gutters">
        <div class="col-lg-7">
          <Form>
            <Form.Group>
              <Form.Label>Usuário</Form.Label>
              <Form.Control name="usuario" id="usuario" type="text" placeholder="Digite seu usúario" />
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
