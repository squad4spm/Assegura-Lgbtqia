import React, {useContext, useState} from 'react';
import { Container, Form, Button, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./login.css";

import Cadastro from "../cadastro/cadastro.js";
import {MyContext} from '../../contexts/MyContext.js';
import user from "../../assets/images/userProfile.png";

export default ()  => {
  const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email:'',
            senha:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.nome]:e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

  return(
    <Container class="my-4 mx-5" id="contaH">
      <Row class="coluna no-gutters">
        <div class="col-lg-5">
            <img src= {user} class="img-fluid" alt="" />
            <p>Não tem uma conta? <Link to="Cadastro">Registre-se</Link></p>
        </div>
        <div class="col-lg-7">
          <Form onSubmit={submitForm} noValidate>
            <Form.Group contolId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control name="email" type="email" placeholder="Digite seu email" />
                <Form.Text className="text-muted">Dados confidenciais</Form.Text>
            </Form.Group>

            <Form.Group controlId="senha">
              <Form.Label>Password</Form.Label>
              <Form.Control name="senha" type="text" placeholder="Password" />
            </Form.Group>

            <Button variant="dark" type="submit">Entrar</Button>
            <Link to="#">Esqueceu a Senha?</Link>
          </Form>
        </div>
      </Row>
    </Container>
  );
};
