import { Container } from "react-bootstrap";
import "./banner.css";
import ImagemMobile from "../../../assets/images/banner_psicologica_mobile.png";

const Banner = () => {
  return (
    <>
      <Container fluid className="visible_desktop">
        <section id="pg_sobre_psicologia_banner">
          <div className="jumbotron card card-image d-block"></div>
        </section>
      </Container>

      <Container fluid className="visible_mobile">
        <img src={ImagemMobile} alt="Banner Principal da Página Ajuda" />
      </Container>
    </>
  );
};

export default Banner;
