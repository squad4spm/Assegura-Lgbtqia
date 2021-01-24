import React, { useContext, useState } from 'react';
import { Container, Form, Button, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import axios from 'axios'

import "./login.css";

import user from "../../../assets/images/userProfile.png";

export default ({ history }) => {
  const [error, setError] = useState(null)

  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (user) => {

    if (user.senhaWord === "123456"  && user.usuario === "kaique") {

      // axios.post("http://app.toplojavirtual.com.br/usuario/login").then((response) => {
      //   if (response.data.status === "OK") {
      //     history.push("/admin/posts")
      //   }

      //   if (response.data.status === "ERROR") {
      //     setError("Deu Ruim")
      //   }

      // })
      history.push("/admin/posts")
    } else {
      setError("Deu Ruim")
    }
  }

  return (
    <Container class="my-4 mx-5" id="contaH">
      <Row class="coluna no-gutters">
        <div class="col-lg-7">
          <Form onSubmit={handleSubmit(handleOnSubmit)}>
            <Form.Group>
              <Form.Label>Usuário</Form.Label>
              <Form.Control name="usuario" id="usuario" type="text" placeholder="Digite seu usúario" ref={register} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control name="senhaWord" id="senha" type="text" placeholder="Password" ref={register} />
            </Form.Group>

            <Button variant="dark" type="submit">Entrar</Button>
            <Link to="#">Esqueceu a Senha?</Link>

            {error && (
              <span>{error}</span>
            )}
          </Form>
        </div>
      </Row>
    </Container>
  );
};
