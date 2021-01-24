import { Row, Col, Container } from "react-bootstrap";

import { Siderbar } from "./Sidebar";

export const LayoutAdmin = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <Siderbar />
        </Col>
        <Col sm={9}>{children}</Col>
      </Row>
    </Container>
  );
};
