import { Container } from "react-bootstrap";

import "./informacoes.css";

import image1 from "../../../assets/images/artigo_direito_1.jpg";
import image2 from "../../../assets/images/artigo_direito_2.jpg";
import image3 from "../../../assets/images/artigo_direito_3.jpg";
import image4 from "../../../assets/images/artigo_direito_4.jpg";
import image5 from "../../../assets/images/artigo_direito_5.jpg";
import image6 from "../../../assets/images/artigo_direito_6.jpg";
import image7 from "../../../assets/images/artigo_direito_7.jpg";
import image8 from "../../../assets/images/artigo_direito_8.jpg";

export default () => {
  const data = [
    {
      title: "recusar a atender",
      resume: "Nenhum estabelecimento pode recusar a atender uma pessoa baseado em preconceito, (art. 39 do CDC)",
      image: image1,
    },
    {
      title: "Casamento homoafetivo",
      resume: "Casamento homoafetivo: Cartórios de todo o Brasil não podem recusar a celebração de casamentos civis de casais do mesmo sexo ou deixar de converter em casamento a união estável homoafetiva (Resolução 175 do CNJ),",
      image: image2,
    },
    {
      title: "Adoção de crianças",
      resume: "Adoção de crianças por casais homoafetivos: 'preenchidas as condições para a adoção, não se discute mais a respeito de qualquer impedimento em decorrência da orientação sexual dos pretendentes.' (ADI 4277/ADPF 132)",
      image: image3,
    },
    {
      title: "União Homoafetiva",
      resume: "União Homoafetiva é entidade familiar (ADI 4277/ADPF 132)",
      image: image4,
    },
    {
      title: "nome social",
      resume: "O campo de 'nome social' deve existir em todos os Boletins de Ocorrência do país (Resolução 11, De 18 de Dezembro De 2014, promulgada pela Secretaria Nacional de Direitos Humanos)",
      image: image5,
    },
    {
      title: "benefícios previdenciários",
      resume: "Os benefícios previdenciários de pensão por morte e auxílio-reclusão também valem para casais homossexuais (art. 30 da Instrução Normativa do INSS nº 20, de 10 de outubro de 2007)",
      image: image6,
    },
    {
      title: "usar seu nome social em todos os órgãos públicos",
      resume: "Transexuais e travestis podem usar seu nome social em todos os órgãos públicos, autarquias e empresas estatais federais. Essa medida vale para funcionários e também usuários. (Decreto Nº 8.727, de 28 de Abril de 2016),",
      image: image7,
    },
    {
      title: "Discriminação",
      resume: "A constituição federal tem como objetivo promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação (art. 3º da Constituição Federal).",
      image: image8,
    },
  ];

  return (
    <Container>
      <div id="pg_direito_informacoes">
        {data.map((item) => (
          <div class="row">
            <div class="col-md-3">
              <img src={item.image} />
            </div>

            <div class="col-md-9">
              <h3>{item.title}</h3>
              <p>{item.resume}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
