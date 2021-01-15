import "./topHeader.css";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaUser } from 'react-icons/fa';

export const TopHeader = () => {
  const history = useHistory();

  return (
  <Container fluid id="topmenu">
    <Row>
      <Col xs={8} id="colLeft">
        <IconContext.Provider value={{ color: "white" }}>
          <FaFacebookSquare onClick={() => window.open('https://pt-br.facebook.com/')} />
          <FaInstagramSquare onClick={() => window.open('https://www.instagram.com/')} />
          <FaTwitterSquare onClick={() => window.open('https://twitter.com/login?lang=pt')} />
          <FaYoutubeSquare onClick={() => window.open('https://www.youtube.com/')} />
        </IconContext.Provider>
      </Col>
      
      <Col xs={4} id="colRight">
        <IconContext.Provider value={{ color: "white" }}>
          <FaUser onClick={() => history.push(`/pages-login`)} />
        </IconContext.Provider>
      </Col>
    </Row>
  </Container>
  );
};