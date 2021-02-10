import "./topHeader.css";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import React from 'react';

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaUser } from 'react-icons/fa';

export const TopHeader = () => {
  const history = useHistory();
  
  return (
  <Container fluid id="topmenu">
    <Row id="rowTop">
      <Col xs={6} id="colLeft">
        <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
          <FaFacebookSquare id="iconsLeft" onClick={() => window.open('https://www.facebook.com/assegura.lgbtqia')} />
          <FaInstagramSquare id="iconsLeft" onClick={() => window.open('https://www.instagram.com/assegura_lgbtqia/')} />
          <FaYoutubeSquare id="iconsLeft" onClick={() => window.open('https://www.youtube.com/channel/UCay4sSsERvpR0FiEWAf5OLw')} />
        </IconContext.Provider>
      </Col>
      
      <Col xs={6} id="colRight">
        login admin
        <IconContext.Provider value={{ color: "white" }}>
          <FaUser id="iconsRight" onClick={() => history.push(`/admin`)} />
        </IconContext.Provider>
      </Col>
    </Row>
  </Container>
  );
};