import "./userProfile.css"
import { Container, Col, Row, Image, Button, InputGroup, FormControl } from "react-bootstrap";

import userProfile from "../../assets/images/userProfile.png";
import img02 from "../../assets/images/markerNome.png";
import img03 from "../../assets/images/markerCasaAcolhimento.png";
import img04 from "../../assets/images/markerJuridico.png";
import img05 from "../../assets/images/markerP.png";

export default () => {
  return (
    <Container>
      <Row className="linha">
          <Col xs={4} className="coluna1">
            <Image src={userProfile} roundedCircle className="profileImg" />
            <p>Usuário</p>
            <Button className="botaoEdit">Editar perfil</Button>
          </Col>
          
          <Col xs={8} className="coluna2">    
              <InputGroup className="camposUsuario">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Nome"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="camposUsuario">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Idade</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Idade"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="camposUsuario">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Nome de usuário"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="camposUsuario">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Nome de usuário"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
              </InputGroup>
          </Col>
      </Row>
    </Container>
  );
};