import React from 'react';
import { Container, Form, Button, Row } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

import "./login.css";

export default function Login({history}) {

  async function handleOnSubmit(evento) {
    evento.preventDefault();

    const formData = new FormData(evento.target);

  const resposta = await fetch('https://app-toplojavirtual-com-br.umbler.net/usuario/login', {
        body: JSON.stringify(Object.fromEntries(formData)), 
        method: 'POST', 
        headers: new Headers({'content-type': 'application/json'})
    });

        if (resposta.status === 200) {
            history.push('/admin/posts')
        } else {
         alert(await resposta.text()) 
        } 

}

  return (
    <Container className="my-4" id="contaH">
      <Row className="coluna no-gutters">
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Usuário</Form.Label>
              <Form.Control name="usuario" id="usuario" type="text" placeholder="Digite seu usúario" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control name="password" id="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="dark" type="submit">Entrar</Button>
            <Link to="#">Esqueceu a Senha?</Link>
          </Form>
      </Row>
    </Container>
  );
}