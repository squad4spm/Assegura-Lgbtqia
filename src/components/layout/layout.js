import { TopHeader } from "./topHeader/topHeader";
import { Menu } from "./menu/menu.js";
import { Footer } from "./footer/footer.js";
import { BtnAjude } from "./btnAjude/btnAjude.js";
import { BtnShare } from "./btnShare/btnShare.js";
import { useRouteMatch } from "react-router-dom";
import "./layout.css"

export const Layout = ({ children }) => {

  return (
    <>
      <TopHeader />
      {useRouteMatch("/")?.isExact ? null : (<Menu />)}
      <div>{children}</div>
      {useRouteMatch("/")?.isExact ? null : (<BtnShare />)}
      {useRouteMatch("/")?.isExact ? null : (<BtnAjude />)}
      {useRouteMatch("/")?.isExact ? null : (<Footer />)}
    </>
  );
};