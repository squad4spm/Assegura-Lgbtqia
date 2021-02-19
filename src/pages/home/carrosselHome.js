import "./home.css"
import imgLogoCard from "../../assets/images/logoAssegura-250px.png";
import Carousel from 'react-bootstrap/Carousel'
import { useHistory } from 'react-router-dom';

import imagParceria from "../../assets/images/Antra.png";
import imagParceria2 from "../../assets/images/Acolhe_LGBT.png";
import imagParceria3 from "../../assets/images/casa1logo.png";
import imagParceria4 from "../../assets/images/logo_allout.png";

export const CarrosselHome = () => {
    const history = useHistory();
  
    return (
        <Carousel fade={true}>
           <Carousel.Item className="cardDescricaoLogo">
                <img src={imgLogoCard} alt="" />
            </Carousel.Item>
            
            <Carousel.Item className="cardDescricaoD" onClick={() => history.push(`/${'defesa-pessoal'}`)}>
                <Carousel.Caption id="topText">
                    <h2 className="titleCards">Defesa pessoal</h2>
                    <p className="textoCards">
                        Pesquisas mostram que uma pessoa treinada para responder adequadamente a um ataque, 
                        pode até mesmo impedir que a agressão comece, pois, reagem ao perigo de forma mais assertiva e confiante, 
                        aumentando as chances de evitar situações violentas ou enfrentá-las com segurança. 
                    </p>
                    <img className="img-fluid" style={{width:"35%", margin:"auto", display:"block"}}  src={imagParceria} alt="" />
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className="cardDescricaoN" onClick={() => history.push(`/${'nome-social'}`)}>
                <Carousel.Caption id="topText">
                    <h2 className="titleCards">Nome social</h2>
                    <p className="textoCards">
                        Nomes estão diretamente ligados a um conceito de masculino e feminino 
                        em nossa sociedade. Felizmente, o processo para que pessoas trans possam
                        utilizar seu nome social em documentos oficiais ficou menos complicado e 
                        mais inclusivo.
                    </p>
                    <img className="img-fluid" style={{width:"40%", margin:"auto", display:"block"}}  src={imagParceria} alt="" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoL" onClick={() => history.push(`/${'localizacoes'}`)}>
                <Carousel.Caption id="topText">
                    <h2 className="titleCards">Localizações</h2>
                    <p className="textoCards">
                        Conheça nosso mapa com a localização de 
                        Escolas de defesa pessoal 
                        Casas de acolhimento e Projetos sociais voltados para a comunidade 
                        Lgbtqia+
                        Centro de referência a Diversidade.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoP" onClick={() => history.push(`/${'ajuda-psicologica'}`)}>
                <Carousel.Caption id="topText">
                    <h2 className="titleCards">Ajuda Psicologica</h2>
                    <p className="textoCards">
                        Atendimento psicológico, pode ajudar muito uma pessoa LGBTQIA+ a viver com mais tranquilidade e segurança na sociedade perigosa em que vivemos, pensando em proporcionar ambientes seguros e acessíveis, para a comunidade Lgbt obter esse apoio, a assegura reúne algumas informações sobre onde encontrar profissionais preparades e instituições que fazem esse serviço.
                    </p>
                    <img className="img-fluid" style={{width:"20%", height: "60px", margin:"0 10px 0 auto", display:"inline"}}  src={imagParceria2} alt="" />
                    <img className="img-fluid" style={{width:"20%", margin:"0 auto 0 10px", display:"inline"}}  src={imagParceria3} alt="" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoJ" onClick={() => history.push(`/${'direitos-lgbtqia'}`)}>
                <Carousel.Caption id="topText">
                    <h2 className="titleCards">Direitos Lgbtqia+</h2>
                    <p className="textoCards">
                        A LGBTIfobia é o termo utilizado para compreender as violências cometidas contra a população LGBTI+ e se apresenta como uma série de atitudes ou sentimentos negativos em relação às pessoas LGBTI+, motivadas pela orientação sexual e/ou sua Identidade de gênero.
                    </p>
                    <img className="img-fluid" style={{width:"20%", height: "60px", margin:"0 10px 0 auto", display:"inline"}}  src={imagParceria} alt="" />
                    <img className="img-fluid" style={{width:"20%", margin:"0 auto 0 10px", display:"inline"}}  src={imagParceria4} alt="" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoC" onClick={() => history.push(`/${'casa-de-acolhimento'}`)}>
                <Carousel.Caption id="topText">
                    <h2 className="titleCards">Casa de acolhimento</h2>
                    <p className="textoCards">
                        Quando se é uma pessoa LGBTQIA+, a própria casa pode representar uma ameaça ou oferecer perigo. Pelo Brasil, as chamadas casas de acolhimento para pessoal LGBTQIA+ auxiliam com apoio moradia e projetos sociais ligados a educação e mercado de trabalho, conheça aqui algumas dessas casas. 
                    </p>
                    <img className="img-fluid" style={{width:"20%", margin:"auto", display:"block"}}  src={imagParceria3} alt="" />
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoA" onClick={() => history.push(`/${'ajude'}`)}>
                <Carousel.Caption id="topText">
                    <h2 className="titleCards">Ajudar</h2>
                    <p className="textoCards">
                        Nós da ASSEGURA LGBTQIA+ acreditamos que sua ajuda é muito importante e significativa para todes. Clique no botão saiba mais e conheça as formas que você pode contribuir e fazer parte de um mundo cada vez melhor e inclusivo.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  };

  export default CarrosselHome;