import "./home.css"
import imgLogoCard from "../../assets/images/logoAssegura-250px.png";
import Carousel from 'react-bootstrap/Carousel'
import { useHistory } from 'react-router-dom';

export const CarrosselHome = () => {
    const history = useHistory();
  
    return (
        <Carousel>
           <Carousel.Item className="cardDescricaoLogo">
                <img src={imgLogoCard} alt="" />
            </Carousel.Item>
            
            <Carousel.Item className="cardDescricaoD" onClick={() => history.push(`/${'defesa-pessoal'}`)}>
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Defesa pessoal</h2>
                    <p class="textoCards">
                        Pesquisas mostram que uma pessoa treinada para responder adequadamente a um ataque, 
                        pode até mesmo impedir que a agressão comece, pois, reagem ao perigo de forma mais assertiva e confiante, 
                        aumentando as chances de evitar situações violentas ou enfrentá-las com segurança. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className="cardDescricaoN" onClick={() => history.push(`/${'nome-social'}`)}>
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Nome social</h2>
                    <p class="textoCards">
                        Nomes estão diretamente ligados a um conceito de masculino e feminino 
                        em nossa sociedade. Felizmente, o processo para que pessoas trans possam
                        utilizar seu nome social em documentos oficiais ficou menos complicado e 
                        mais inclusivo.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoL" onClick={() => history.push(`/${'localizacoes'}`)}>
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Localizações</h2>
                    <p class="textoCards">
                        Conheça nosso mapa com a localização de 
                        Escolas de defesa pessoal 
                        Casas de acolhimento e Projetos sociais voltados para a comunidade 
                        Lgbtqia+
                        Centro de referência a Diversidade.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoP" onClick={() => history.push(`/${'atendimento-psicologico'}`)}>
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Psicológico</h2>
                    <p class="textoCards">
                    Atendimento psicológico, pode ajudar muito uma pessoa LGBTQIA+ a viver com mais tranquilidade e segurança na sociedade perigosa em que vivemos, pensando em proporcionar ambientes seguros e acessíveis, para a comunidade Lgbt obter esse apoio, a assegura reúne algumas informações sobre onde encontrar profissionais preparados e instituições que fazem esse serviço. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoJ" onClick={() => history.push(`/${'direitos-lgbtqia'}`)}>
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Direitos Lgbtqia+</h2>
                    <p class="textoCards">
                    A LGBTIfobia é o termo utilizado para compreender as violências cometidas contra a população LGBTI+ e se apresenta como uma série de atitudes ou sentimentos negativos em relação às pessoas LGBTI+, motivadas pela orientação sexual e/ou sua Identidade de gênero.
                    <br />
                    Aqui buscamos compilar o máximo de informações sobre direitos LGBTQIA+ e direcionar você a instituições e sites que possam ajudar na tomada de decisão e na tirada de dúvidas sobre direitos LGBTQIA+
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoC" onClick={() => history.push(`/${'casa-de-acolhimento'}`)}>
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Casa de acolhimento</h2>
                    <p class="textoCards">
                     Quando se é uma pessoa LGBTQIA+, a própria casa pode representar uma ameaça ou oferecer perigo. Segundo levantamento mais recente do Grupo Gay da Bahia (GGB), 35,5% das lésbicas, gays, bissexuais, travestis e transexuais assassinadas em 2019 foram mortas em suas residências. Pelo Brasil, as chamadas casas de acolhimento para pessoal LGBTQIA+ auxiliam com apoio moradia e projetos sociais ligados a educação e mercado de trabalho, conheça aqui algumas dessas casas. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoA" onClick={() => history.push(`/${'ajude'}`)}>
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Ajudar</h2>
                    <p class="textoCards">
                        Nós do ASSEGURA LGBTQIA+ acreditamos que sua ajuda é muito importante e significativa para todos. 
                        Clique no botão saiba mais e conheça as formas que você pode contribuir e fazer parte de um mundo 
                        cada vez melhor e inclusivo.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  };

  export default CarrosselHome;