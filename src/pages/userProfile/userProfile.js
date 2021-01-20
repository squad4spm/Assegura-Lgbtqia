import "./userProfile.css"
import React, {useContext} from 'react';
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import {MyContext} from '../../contexts/MyContext';
import userProfile from "../../assets/images/userProfile.png";

export default () => {
    const history = useHistory();

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    let classNameC = "botaoEditV";
    let onClickC = `/voluntarios`;
    let label = "Voluntários";
    
    let nome =`${theUser.nome}`;
    let sobrenome =`${theUser.sobrenome}`;
    let dataNascimento=`${theUser.dataNascimento}`;
    let email=`${theUser.email}`;
    let tipo = "";
    let endereco = `${theUser.endereco}`;
    let complemento = `${theUser.complemento}`;
    let cidade = `${theUser.cidade}`;
    let estado = `${theUser.estado}`;
    let cep = `${theUser.cep}`;

    if(isAuth){
        tipo = `${theUser.tipo}`
        console.log(tipo)
        if(tipo === 'Parceiro'){
            classNameC = "botaoEditV";
            onClickC = `/voluntarios`;
            label = "Voluntários";
        }else{
            classNameC = "botaoEditV";
            onClickC = `/parceiros`;
            label = "Parceiros";
        }

        return (
        <Container>
        <Row className="linha">
            <Col lg={6} className="coluna1">
                <Image src={userProfile} roundedCircle className="profileImg" />
                <p>Usuário</p>
                <Button className="botaoEdit">Salvar alterações</Button>
                <br />
                <Button className="botaoEditL" onClick={logoutUser}>Logout</Button>
                <br />
                <Button className={classNameC} onClick={() => history.push(`${onClickC}`)}>{label}</Button>
            </Col>
            
            <Col lg={6} className="coluna2">    
                <Form.Row>
                    <Form.Group as={Col} controlId="Primeiro Nome"  xs={12} lg={6}>
                        <Form.Label id="formLabel">Nome:</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" value={nome} disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Sobrenome" lg={6}>
                        <Form.Label id="formLabel">Sobrenome:</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu sobrenome" value={sobrenome} disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="dataNascimento" lg={12}>
                        <Form.Label id="formLabel">Data de nascimento:</Form.Label>
                        <Form.Control type="text" placeholder="DD/MM/AAAA" value={dataNascimento} disabled />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" lg={12}>
                        <Form.Label id="formLabel">Email:</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" value={email} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label id="formLabel">Tipo de cadastro:</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." value={tipo} disabled>
                            <option>{tipo}</option>
                            <option>Voluntário</option>
                            <option>Parceiro</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label id="formLabel">Senha:</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label id="formLabel">Confirme a senha:</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1" lg={8}>
                    <Form.Label id="formLabel">Endereço:</Form.Label>
                    <Form.Control placeholder="Ex: Rua xxxx 1234" value={endereco} />
                </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress2" lg={4}>
                        <Form.Label id="formLabel">Complemento:</Form.Label>
                        <Form.Control placeholder="Apartmento, studio, piso ou sitio" value={complemento} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity" xs={12} lg={6}>
                        <Form.Label id="formLabel">Cidade:</Form.Label>
                        <Form.Control placeholder="Digite sua cidade" value={cidade}></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label id="formLabel">Estado:</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." value={estado}>
                            <option>{estado}</option>
                            <option>São Paulo</option>
                            <option>Rio de Janeiro</option>
                            <option>Outro</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label id="formLabel">CEP :</Form.Label>
                        <Form.Control placeholder="0000-000" value={cep}></Form.Control>
                    </Form.Group>
                </Form.Row>
            </Col>
        </Row>
        </Container>
        );
    }else{
       return(
        <Container id="notLogin">Faça o login</Container>
       );
    }
};