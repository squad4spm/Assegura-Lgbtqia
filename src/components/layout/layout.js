import { TopHeader } from "./topHeader/topHeader";
import { Menu } from "./menu/menu.js";
import { Footer } from "./footer/footer.js";
import { BtnAjude } from "./btnAjude/btnAjude.js";
import "./layout.css"

export const Layout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Menu />
      <div>{children}</div>
      <BtnAjude />
      <Footer />
    </>
  );
};