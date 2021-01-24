import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  background: #dedede;
`;

const Item = styled.div`
  width: 100%;
  padding: 10px;
  background: #fdb1b1;
  cursor: pointer;
`;

export const Siderbar = () => {
  const history = useHistory();

  return (
    <Container>
      <Item onClick={()=> history.push("/admin/categorias")}>Categorias</Item>
      <Item onClick={()=> history.push("/admin")}>Posts</Item>
    </Container>
  );
};
