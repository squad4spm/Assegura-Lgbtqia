import { Navbar, Nav, NavbarBrand, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import "./btnAjude.css";

export const BtnAjude = () => {
  return (
    <div id="botao_flutuante">
        <a href="ajude.php">Ajude!<i class="fas fa-mouse"></i></a>
    </div>
  );
};