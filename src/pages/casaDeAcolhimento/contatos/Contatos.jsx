import { Container } from "react-bootstrap";

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import "./contatos.css";

export default () => {
  const data = [
    {
      name: "Casa Chama",
      linkFace: "https://www.facebook.com/casachama440",
      linkInsta: "https://www.instagram.com/casachama_org/",
      telefone1: "+55 11 2565 2074",
      telefone2: "+55 11 99448 2641",
    },

    {
      name: "Casa Florecer",
      linkFace: "https://www.facebook.com/casaflorescer/",
      linkInsta: "https://www.instagram.com/casaflorescer_/",
      telefone1: "+55 11 3456 7890",
      telefone2: "",
    },

    {
      name: "Casa 1",
      linkFace: "https://www.facebook.com/casaum/",
      linkInsta: "https://www.instagram.com/casa1/",
      telefone1: "",
      telefone2: "",
    },
  ];

  return (
    <Container fluid>
      <section id="pg_acolhimento_contatos">
        <Container>
          <div className="row">
            {data.map((item) => (
              <div className="col-md-4">
                <h5 className="mt-0">{item.name}</h5>
                <p>Redes Sociais</p>
                <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
                  <FaFacebookSquare
                    id="iconsLeft"
                    onClick={() => window.open(item.linkFace)}
                  />
                  <FaInstagramSquare
                    id="iconsLeft"
                    onClick={() => window.open(item.linkInsta)}
                  />
                </IconContext.Provider>
                <p></p>
                <p>Contatos</p>
                <p>{item.telefone1 ? item.telefone1 : ''}</p>
                <p>{item.telefone2 ? item.telefone2 : ''}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Container>
  );
};
