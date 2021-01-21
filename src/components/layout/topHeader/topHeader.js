import "./topHeader.css";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import React, {useContext} from 'react';
import {MyContext} from '../../../contexts/MyContext';

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaUser } from 'react-icons/fa';

export const TopHeader = () => {
  const history = useHistory();
  
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
        faça seu login
        <IconContext.Provider value={{ color: "white" }}>
          <FaUser id="iconsRight" onClick={() => history.push(`/pages-login`)} />
        </IconContext.Provider>
      </Col>
    </Row>
  </Container>
  );
};