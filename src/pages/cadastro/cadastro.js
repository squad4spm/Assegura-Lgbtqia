import { React, useRef, useState, useEffect }from 'react';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./cadastro.css";


export default () => {
   const [imagem, setimagem] = useState();
   const [preview, setPreview] = useState();
   const fileInputRef = useRef();
    
   useEffect(() => {
    if (imagem){
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(imagem);
    } else {
        setPreview(null);
    }
   }, [imagem])
    return(
      
    <Form>
        <Container>
        
            <h1>Por gentileza preencha todos os dados abaixo:</h1>            
            <div className={StyleSheet.container}>
                <Form>
                    {preview ? (

                    <img src={preview} class="img-fluid" onClick={() => { 
                        setimagem(null);
                    }}/> 
                    
                    ) : (

                    <button onClick={(Event) => {
                        Event.preventDefault();
                        fileInputRef.current.click();
                    }}>Inserir Imagem</button> )}
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
                </Form>
            </div>
            <Form.Row>
                <Form.Group as={Col} controlId="Primeiro Nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group as={Col} controlId="Sobrenome">
                    <Form.Label>Sobrenome:</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu sobrenome" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Tipo de cadastro:</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Escolha...</option>
                        <option>Voluntário</option>
                        <option>Normal</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Confirme a senha:</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Endereço:</Form.Label>
                <Form.Control placeholder="Ex: Rua xxxx 1234" />
            </Form.Group>
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control placeholder="Apartmento, studio, or piso, síto" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.File id="exampleFormControlFile1" label="Escolha uma foto de perfil" />
                </Form.Group>
                
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control placeholder="Digite sua cidade"></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Escolha...</option>
                        <option>São Paulo</option>
                        <option>Rio de Janeiro</option>
                        <option>Outro</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>CEP :</Form.Label>
                    <Form.Control placeholder="0000-000"></Form.Control>
                </Form.Group>
            </Form.Row>
            
            
            <Button variant="dark" type="submit" >
                    Enviar
                </Button>
        </Container>
    </Form>

  );
};