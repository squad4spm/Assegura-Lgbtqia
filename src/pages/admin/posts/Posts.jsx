import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { Lista } from "./Lista";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  margin-left: auto;
  display: block;
  padding: 10px 30px;
  border-radius: 4px;
  border: 1px solid #333;
  margin-bottom: 20px;
  background: #400040;
  color: white;
`;

export default ({history}) => {
  return (
    <Container>
      <Header>
        <h1>Posts</h1>

        <Button onClick={()=>{history.push("/admin/new")}}>Novo</Button>
      </Header>

      <Switch>
        <Route
          path={["/admin", "/admin/new"]}
          component={Lista}
        />
      </Switch>
    </Container>
  );
};
