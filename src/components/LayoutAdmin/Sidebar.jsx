import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  background: rgba(64, 0, 64, 0.2);
`;

const Item = styled.div`
  width: 100%;
  padding: 10px;
  background: #400040;
  cursor: pointer;
  color: white;
`;

export const Siderbar = () => {
  const history = useHistory();

  return (
    <Container>
      <Item onClick={()=> history.push("/admin/categorias")}>Categorias</Item>
      <Item onClick={()=> history.push("/admin/posts")}>Posts</Item>
    </Container>
  );
};
