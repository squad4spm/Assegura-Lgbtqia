import { React, useRef, useState, useEffect, useContext}from 'react';
import {MyContext} from '../../contexts/MyContext';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./cadastro.css";

export default () => {

        return(  
    <Form >
        <Container id="contaCadastro">
        
            <h1>Por gentileza preencha todos os dados abaixo:</h1>            
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control name="nome" id="nome" type="text" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Sobrenome:</Form.Label>
                    <Form.Control name="sobrenome" id="sobrenome" type="text" placeholder="Digite seu sobrenome" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Data de nascimento:</Form.Label>
                    <Form.Control name="dataNascimento" id="dataNascimento" type="text" placeholder="DD/MM/AAAA" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control name="email" id="email" type="text" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Tipo de cadastro:</Form.Label>
                    <Form.Control name="tipo" id="tipo" type="text" as="select" defaultValue="Choose...">
                        <option>Escolha...</option>
                        <option>Voluntário</option>
                        <option>Parceiro</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control name="senha" id="senha" type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Confirme a senha:</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>
            </Form.Row>
            
            <Button variant="dark" type="submit" >
                Enviar
            </Button>
        </Container>
    </Form>

    );
};