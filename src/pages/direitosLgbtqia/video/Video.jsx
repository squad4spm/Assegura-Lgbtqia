import { Container } from "react-bootstrap";

import "./video.css";

export default () => {
  return (
    <Container fluid>
      <div id="pg_direito_video">
        <Container>
          <div class="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <h3>Direitos LGBT+ no Brasil - Assista Vídeo abaixo</h3>
            </div>
            <div className="col-md-2"></div>
            <div id="pg_direito_video"></div>
          </div>

          <div class="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/FefS4qGbLhs"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-2"></div>
            <div id="pg_direito_video"></div>
          </div>
        </Container>
      </div>
    </Container>
  );
};
