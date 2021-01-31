import React, { useState } from 'react';
import { Container, Form, Button, Row } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import { useForm } from 'react-hook-form'

import "./login.css";

const Login = ({ history }) => {
  const [error, setError] = useState(null)

  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (user) => {

    if (user.senhaWord === "123456"  && user.usuario === "kaique") {

      // axios.post("https://app-toplojavirtual-com-br.umbler.net/usuario/login").then((response) => {
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
    <Container className="my-4 mx-5" id="contaH">
      <Row className="coluna no-gutters">
        <div className="col-lg-7">
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

export default Login;