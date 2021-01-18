import "./userProfile.css"
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap";

import userProfile from "../../assets/images/userProfile.png";

export default () => {
  return (
    <Container>
      <Row className="linha">
          <Col className="coluna1">
            <Image src={userProfile} roundedCircle className="profileImg" />
            <p>Usuário</p>
            <Button className="botaoEdit">Editar perfil</Button>
            <br />
            <Button className="botaoEditL">Logout</Button>
          </Col>
          
          <Col className="coluna2">    
            <Form.Row>
                <Form.Group as={Col} controlId="Primeiro Nome">
                    <Form.Label id="formLabel">Nome:</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group as={Col} controlId="Sobrenome">
                    <Form.Label id="formLabel">Sobrenome:</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu sobrenome" />
                </Form.Group>

                <Form.Group as={Col} controlId="Sobrenome">
                    <Form.Label id="formLabel">Data de nascimento:</Form.Label>
                    <Form.Control type="text" placeholder="DD/MM/AAAA" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label id="formLabel">Email:</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label id="formLabel">Tipo de cadastro:</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Escolha...</option>
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

            <Form.Group controlId="formGridAddress1">
                <Form.Label id="formLabel">Endereço:</Form.Label>
                <Form.Control placeholder="Ex: Rua xxxx 1234" />
            </Form.Group>
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Label id="formLabel">Complemento:</Form.Label>
                    <Form.Control placeholder="Apartmento, studio, piso ou sitio" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label id="formLabel">Cidade:</Form.Label>
                    <Form.Control placeholder="Digite sua cidade"></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label id="formLabel">Estado:</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Escolha...</option>
                        <option>São Paulo</option>
                        <option>Rio de Janeiro</option>
                        <option>Outro</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label id="formLabel">CEP :</Form.Label>
                    <Form.Control placeholder="0000-000"></Form.Control>
                </Form.Group>
            </Form.Row>
          </Col>
      </Row>
    </Container>
  );
};