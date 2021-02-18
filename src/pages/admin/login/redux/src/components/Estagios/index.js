import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import * as toggleTrilha from "../../store/actions/trilha";

const Container = styled.div`
  width: 1366px;
  margin: auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
`;

const Estagios = ({ trilhas, dispatch }) => {
  return (
    <Container>
      <h1>Selecione uma trilha para aprender</h1>
      {trilhas.map((trilha) => (
        <span key={trilha.id}>
          <Button onClick={() => dispatch(toggleTrilha.toggleTrilha(trilha))}>
            {trilha.titulo}
          </Button>
        </span>
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  trilhas: state.trilha.trilhas,
});

export default connect(mapStateToProps)(Estagios);
