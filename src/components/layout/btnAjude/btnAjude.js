import { Navbar, Nav, NavbarBrand, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import "./btnAjude.css";

export const BtnAjude = () => {
  
  const history = useHistory();

  const menuItens = [
    {
      label: "Ajude",
      path: "ajude"
    },
  ];

  return (
    <div id="botao_flutuante">
      {menuItens.map((iten) => (
        <a onClick={() => history.push(`/${iten.path}`)}>Ajude!<i class="fas fa-mouse"></i></a>
      ))}
    </div>
  );
};