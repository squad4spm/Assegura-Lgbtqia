import "./home.css"
import imgLogoCard from "../../assets/images/logoAssegura-250px.png";
import Carousel from 'react-bootstrap/Carousel'

export const CarrosselHome = () => {
  
    return (
        <Carousel>
           <Carousel.Item className="cardDescricaoLogo">
                <img src={imgLogoCard} alt="" />
            </Carousel.Item>
            
            <Carousel.Item className="cardDescricaoD">
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Defesa pessoal</h2>
                    <p class="textoCards">
                        Pesquisas mostram que uma pessoa treinada para responder adequadamente a um ataque, 
                        pode até mesmo impedir que a agressão comece, pois, reagem ao perigo de forma mais assertiva e confiante, 
                        aumentando as chances de evitar situações violentas ou enfrentá-las com segurança. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className="cardDescricaoN">
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

            <Carousel.Item className="cardDescricaoL">
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

            <Carousel.Item className="cardDescricaoP">
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Psicológico</h2>
                    <p class="textoCards">
                        Cadastro Para Psicólogos Voluntários
                        <br />
                        Cadastro Para Conseguir Atendimento  
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoJ">
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Direitos Lgbtqia+</h2>
                    <p class="textoCards">
                    Direito Civil Brasileiro
                    <br />
                    Evolução dos Direitos LGBTQI+
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoC">
                <Carousel.Caption id="topText">
                    <h2 class="titleCards">Casa de acolhimento</h2>
                    <p class="textoCards">
                        Conheça algumas Casas De Acolhimento Localizadas em São Paulo.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="cardDescricaoA">
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