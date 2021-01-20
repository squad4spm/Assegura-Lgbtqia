import { Container, Button } from "react-bootstrap";

import cartilha from "../../../assets/images/cartilha_antra.png";

import "./callDownload.css";

export default () => {
  return (
    <Container>
      <div id="pg_direito_call_download">
        <div class="row">
          <div className="col-md-12 text-center">
            <h3>Cartilha Antra Brasil</h3>
          </div>
        </div>

        <div class="row">
          <div className="col-md-12 text-center">
            <p>Baixe ou leia a cartilha</p>
          </div>
        </div>

        <div class="row">
          <div className="col-md-6 text-center">
            <img src={cartilha} />
          </div>

          <div className="col-md-6 text-center">
            <div class="containerButton">
            <Button
              variant="outline-success"
              size="lg"
              onClick={() =>
                window.open(
                  "https://antrabrasil.files.wordpress.com/2020/03/cartilha-lgbtifobia.pdf",
                  "_blank"
                )
              }
            >
              Ler Online
            </Button>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};
