import { Container } from "react-bootstrap";

import "./video.css";

const Video = () => {
  return (
    <Container fluid>
      <div id="pg_direito_video">
        <Container>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <h3>Direitos LGBT+ no Brasil - Assista Vídeo abaixo</h3>
            </div>
            <div className="col-md-2"></div>
            <div id="pg_direito_video"></div>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <iframe
                title="video1"
                width="100%"Name
                height="315"
                src="https://www.youtube.com/embed/FefS4qGbLhs"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
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

export default Video;