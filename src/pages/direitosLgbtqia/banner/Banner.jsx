import { Container } from "react-bootstrap";
import './banner.css'
import ImagemMobile from "../../../assets/images/banner_direitos_mobile.fw.png";

const Banner = () => {
  return (
    <>
    <Container fluid className="visible_desktop">
      <section id="pg_direito_banner">
        <div className="jumbotron card card-image d-block"></div>
      </section>
    </Container>

    <Container fluid className="visible_mobile">
      <img src={ImagemMobile} alt="Banner Principal da Página de Direitos" />
    </Container>
  </>
  );
};

export default Banner;