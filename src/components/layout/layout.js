import { Container} from "react-bootstrap";

import { Menu } from "./menu/menu.js";
import { Footer } from "./footer/footer.js";
import { BtnAjude } from "./btnAjude/btnAjude.js";
import "./layout.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <div>{children}</div>
      <BtnAjude />
      <Footer />
    </>
  );
};