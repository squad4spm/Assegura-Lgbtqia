import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

const Container = styled.div`
  width: 1366px;
  margin: auto;
`;

const Conteudo = styled.div`
  width: 1366px;
  margin: 50px auto;
`;

const Passagem = ({ trilhaAtiva }) => {
  return (
    <Container>
      <h2>
        <strong>
          {trilhaAtiva?.titulo ? `Module: ${trilhaAtiva?.titulo}` : ""}
        </strong>
      </h2>

      <Conteudo>
        {trilhaAtiva?.tipo === "video" && (
          <iframe
            width="560"
            height="315"
            src={trilhaAtiva.linkVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {trilhaAtiva?.tipo === "texto" && (
          <div dangerouslySetInnerHTML={{ __html: trilhaAtiva.conteudo }} />
        )}
      </Conteudo>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  trilhaAtiva: state.trilha.trilhaAtiva,
});

export default connect(mapStateToProps)(Passagem);
