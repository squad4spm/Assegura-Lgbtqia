import { React, useRef, useState, useEffect, useContext}from 'react';
import {MyContext} from '../../contexts/MyContext';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./cadastro.css";


export default () => {
   const [imagemM, setimagem] = useState();
   const [preview, setPreview] = useState();
   const fileInputRef = useRef();
    
   useEffect(() => {
    if (imagemM){
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(imagemM);
    } else {
        setPreview(null);
    }
   }, [imagemM])
    
   /* ------ ------ */
   
   const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            nome:'',
            sobrenome:'',
            dataNascimento:'',
            email:'',
            tipo:'',
            senha:'',
            endereco:'',
            complemento:'',
            cidade:'',
            estado:'',
            cep:'',
            imagem:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (nome, email, senha)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    
    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

   return(  
    <Form onSubmit={submitForm} noValidate>
        <Container id="contaCadastro">
        
            <h1>Por gentileza preencha todos os dados abaixo:</h1>            
            <div className={StyleSheet.container}>
                <div>
                    {preview ? (

                    <img src={preview} class="img-fluid" onClick={() => { 
                        setimagem(null);
                    }}/> 
                    
                    ) : (

                    <button onClick={(Event) => {
                        Event.preventDefault();
                        fileInputRef.current.click();
                    }} className="imgBtn">Inserir Imagem</button> )}
                    <input 
                        type="file" 
                        style={{ display: "none"}} 
                        ref={fileInputRef} 
                        accept="image/*"
                        onChange={(Event) => {
                            const file = Event.target.files[0];
                            if (file) {
                                setimagem(file);
                            }else{
                                setimagem(null);
                            }
                        }}/>
                </div>
            </div>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control name="nome" id="nome" type="text" placeholder="Digite seu nome" value={state.userInfo.nome} onChange={onChangeValue} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Sobrenome:</Form.Label>
                    <Form.Control name="sobrenome" id="sobrenome" type="text" placeholder="Digite seu sobrenome" value={state.userInfo.sobrenome} onChange={onChangeValue} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Data de nascimento:</Form.Label>
                    <Form.Control name="dataNascimento" id="dataNascimento" type="text" placeholder="DD/MM/AAAA" value={state.userInfo.dataNascimento} onChange={onChangeValue} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control name="email" id="email" type="text" placeholder="Digite seu email" value={state.userInfo.email} onChange={onChangeValue} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Tipo de cadastro:</Form.Label>
                    <Form.Control name="tipo" id="tipo" type="text" as="select" defaultValue="Choose..." value={state.userInfo.tipo} onChange={onChangeValue}>
                        <option>Escolha...</option>
                        <option>Voluntário</option>
                        <option>Parceiro</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control name="senha" id="senha" type="password" placeholder="Digite sua senha" value={state.userInfo.senha} onChange={onChangeValue} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Confirme a senha:</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>
            </Form.Row>

            <Form.Group>
                <Form.Label>Endereço:</Form.Label>
                <Form.Control name="endereco" id="endereco" type="text" placeholder="Ex: Rua xxxx 1234" value={state.userInfo.endereco} onChange={onChangeValue} />
            </Form.Group>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control name="complemento" id="complemento" type="text" placeholder="Apartmento, studio, piso ou sitio" value={state.userInfo.complemento} onChange={onChangeValue} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control name="cidade" id="cidade" type="text" placeholder="Digite sua cidade" value={state.userInfo.cidade} onChange={onChangeValue}></Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control name="estado" id="estado" type="text" as="select" defaultValue="Choose..." value={state.userInfo.estado} onChange={onChangeValue}>
                        <option>Escolha...</option>
                        <option>São Paulo</option>
                        <option>Rio de Janeiro</option>
                        <option>Outro</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>CEP :</Form.Label>
                    <Form.Control name="cep" id="cep" type="text" placeholder="0000-000" value={state.userInfo.cep} onChange={onChangeValue}></Form.Control>
                </Form.Group>
            </Form.Row>
            
            {errorMsg}
            {successMsg}
            
            <Button variant="dark" type="submit" >
                Enviar
            </Button>
        </Container>
    </Form>

  );
};