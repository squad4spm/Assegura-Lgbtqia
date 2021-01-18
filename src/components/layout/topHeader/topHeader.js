import "./topHeader.css";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import React, {useContext} from 'react';
import {MyContext} from '../../../contexts/MyContext';

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaUser } from 'react-icons/fa';

export const TopHeader = () => {
  let userLabel = "";
  let userPL = "";
  const history = useHistory();

  const {rootState,logoutUser} = useContext(MyContext);
  const {isAuth,theUser,showLogin} = rootState;

  if(isAuth){
    userLabel = `${theUser.nome}`;
    userPL = () => history.push(`/perfil`);
  }else{
    userLabel = "faça seu login";
    userPL = () => history.push(`/pages-login`);
  }

  return (
  <Container fluid id="topmenu">
    <Row id="rowTop">
      <Col xs={6} id="colLeft">
        <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
          <FaFacebookSquare id="iconsLeft" onClick={() => window.open('https://pt-br.facebook.com/')} />
          <FaInstagramSquare id="iconsLeft" onClick={() => window.open('https://www.instagram.com/')} />
          <FaTwitterSquare id="iconsLeft" onClick={() => window.open('https://twitter.com/login?lang=pt')} />
          <FaYoutubeSquare id="iconsLeft" onClick={() => window.open('https://www.youtube.com/')} />
        </IconContext.Provider>
      </Col>
      
      <Col xs={6} id="colRight">
        {userLabel}
        <IconContext.Provider value={{ color: "white" }}>
          <FaUser id="iconsRight" onClick={userPL} />
        </IconContext.Provider>
      </Col>
    </Row>
  </Container>
  );
};