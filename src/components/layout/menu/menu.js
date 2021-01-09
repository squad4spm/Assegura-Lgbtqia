import { Navbar, Nav, NavbarBrand, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import "./menu.css";
import logo from "../../../assets/images/logoAssegura-250px.png";

export const Menu = () => {

  const history = useHistory();

  const menuItens = [
    {
      label: "Defesa pessoal",
      path: "defesa-pessoal"
    },
    {
      label: "Nome social",
      path: "nome-social"
    },
    {
      label: "Atendimento psicologico",
      path: "atendimento-psicologico"
    },
    {
      label: "Direitos lgbtqia",
      path: "direitos-lgbtqia"
    },
    {
      label: "Casa de acolhimento",
      path: "casa-de-acolhimento"
    },
    {
      label: "Localizações",
      path: "localizacoes"
    },
  ];

  return (
    <Navbar className="menunav" expand="lg">
      <Container>

        <Navbar.Brand className="logo">
          <img src={logo} alt='logo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-topo" />

        <Navbar.Collapse id="menu-topo">
          <Nav className="menu ml-auto">

            {menuItens.map((iten) => (
              <Nav.Item>
                <Nav.Link className="item" onClick={() => history.push(`/${iten.path}`)}>
                  {iten.label}
                </Nav.Link>
              </Nav.Item>
            ))}


          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};