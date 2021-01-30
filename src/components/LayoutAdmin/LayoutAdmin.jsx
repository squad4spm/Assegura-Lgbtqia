import { Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { Siderbar } from "./Sidebar";

export const LayoutAdmin = ({ children }) => {
  const location = useLocation();

  return (
    <Container>
      <Row>
        <Col sm={3}>
          {(location.pathname === "/admin/categorias" || location.pathname === "/admin/posts") && <Siderbar />}
        </Col>
        <Col sm={9}>{children}</Col>
      </Row>
    </Container>
  );
};
