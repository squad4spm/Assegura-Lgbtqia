import { Container, Button } from "react-bootstrap";

import casa1 from "../../../assets/images/casa1.jpg";
import casa_florecer from "../../../assets/images/casa_florecer.jpg";

import "./articles.css";

export default () => {
  const data = [
    {
      image: casa1,
      title:
        "Qualquer um pode ser uma ameaça”: no Brasil de Bolsonaro, LGBTs tomam a defesa pessoal com suas próprias mãos",
      description:
        "Em um país com uma das maiores taxas de violência do mundo contra gays e transgêneros, onde as redes sociais...",
      linkAction:
        "https://medium.com/@piranhasteamfc/qualquer-um-pode-ser-uma-amea%C3%A7a-no-brasil-de-bolsonaro-lgbts-tomam-a-defesa-pessoal-com-suas-a9b62555aa0e",
    },
    {
      image: casa1,
      title:
        "Qualquer um pode ser uma ameaça”: no Brasil de Bolsonaro, LGBTs tomam a defesa pessoal com suas próprias mãos",
      description:
        "Em um país com uma das maiores taxas de violência do mundo contra gays e transgêneros, onde as redes sociais...",
      linkAction:
        "https://medium.com/@piranhasteamfc/qualquer-um-pode-ser-uma-amea%C3%A7a-no-brasil-de-bolsonaro-lgbts-tomam-a-defesa-pessoal-com-suas-a9b62555aa0e",
    },
    {
      image: casa_florecer,
      title:
        "Qualquer um pode ser uma ameaça”: no Brasil de Bolsonaro, LGBTs tomam a defesa pessoal com suas próprias mãos",
      description:
        "Em um país com uma das maiores taxas de violência do mundo contra gays e transgêneros, onde as redes sociais...",
      linkAction:
        "https://medium.com/@piranhasteamfc/qualquer-um-pode-ser-uma-amea%C3%A7a-no-brasil-de-bolsonaro-lgbts-tomam-a-defesa-pessoal-com-suas-a9b62555aa0e",
    },
  ];

  return (
    <Container fluid>
      <section id="pg_sobre_psicologia_articles">
        <Container>
          <div class="row">
            <div class="col-md-12 text-center">
              <h3>Artigos sobre Ajuda Psicológica</h3>
            </div>
          </div>

          <div class="row">
            {data.map((item) => (
              <div class="col-md-4 text-center">
                <img src={item.image} class="img-fluid" alt={item.title} />
                <h5 class="mt-0">{item.title}</h5>
                <p>{item.description}</p>
                <Button
                  variant="outline-success"
                  onClick={() => window.open(item.linkAction, "_blank")}
                >
                  Leia mais
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Container>
  );
};
