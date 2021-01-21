import React from 'react';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./cadastro.css";
import axios from 'axios'

const initialValues = {
    nome: '',
    sobreNome: '',
    telefone: '',
    email: '',
    password: '',
}
export default () => {
    const [values, setValues] = React.useState(initialValues)

    console.log("euu", { values })

    const HandleonChange = e => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value })
    }



    const handleOnCadastro = () => {
       const result =  axios.post("http://app.toplojavirtual.com.br/user", values).then(response=> console.log("euu", response)).catch(err=> console.log("euu", err))

       console.log('euu', result)
    }


    return (
        <Form onSubmit={handleOnCadastro}>
            <Container id="contaCadastro">

                <h1>Por gentileza preencha todos os dados abaixo:</h1>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control name="nome" id="nome" type="text" placeholder="Digite seu nome" onChange={HandleonChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Sobrenome:</Form.Label>
                        <Form.Control name="sobreNome" id="sobreNome" type="text" placeholder="Digite seu sobrenome" onChange={HandleonChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control name="telefone" id="telefone" type="text" placeholder="DD/MM/AAAA" onChange={HandleonChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" id="email" type="text" placeholder="Digite seu email" onChange={HandleonChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control name="password" id="password" type="password" placeholder="Digite sua senha" onChange={HandleonChange} />
                    </Form.Group>
                </Form.Row>

                <Button variant="dark" type="submit" >
                    Enviar
            </Button>
            </Container>
        </Form>

    );
};