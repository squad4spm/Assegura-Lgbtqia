import { Container} from "react-bootstrap";

import { Menu } from "./menu/menu.js";
import { Footer } from "./footer/footer.js";
import "./layout.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <Container fluid className="principal">{children}</Container>
      <Footer />
    </>
  );
};