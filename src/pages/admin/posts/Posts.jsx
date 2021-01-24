import styled from "styled-components";

import { Lista } from "./Lista";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ({}) => {
  return (
    <Container>
      <Header>
        <h1>Posts</h1>

        <button>Novo</button>
      </Header>
      
      <Lista/>
    </Container>
  );
};
