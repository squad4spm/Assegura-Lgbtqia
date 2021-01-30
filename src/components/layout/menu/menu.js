import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import "./menuref.css";
import "./menu.css";

import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";

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
      label: "Ajuda Psicologica",
      path: "ajuda-psicologica"
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
    <Navbar className="menunav" expand="xl">
      <Container>

        <Navbar.Brand className="logo">
          <img src={logo} alt='logo' id="logo" onClick={() => history.push(`/`)} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-topo">
          <span>
          <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
            <FiMenu />
          </IconContext.Provider>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="menu-topo">
          <Nav className="menu m-auto">

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