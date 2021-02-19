import "./home.css"
import { Container, Col, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import CarrosselHome from './carrosselHome.js';

import imglogo from "../../assets/images/logoAssegura.png";

import img01 from "../../assets/images/selfDefense.png";
import img02 from "../../assets/images/doc.png";
import img03 from "../../assets/images/map.png";
import img04 from "../../assets/images/shake.png";
import img05 from "../../assets/images/house.png";
import img06 from "../../assets/images/law.png";
import img07 from "../../assets/images/psicologhy.png";
import imagParceria from "../../assets/images/Antra.png";
import imagParceria2 from "../../assets/images/Acolhe_LGBT.png";
import imagParceria3 from "../../assets/images/casa1logo.png";
import imagParceria4 from "../../assets/images/logo_allout.png";


const Home = () => {

    const history = useHistory();

  return (
    <Container fluid>
        <Row id="bcg">
            <Col xs={3} className="left">
                <div className="descricaoPH" id="descricaoP">
                    <h2>Ajuda Psicologica</h2>
                    <p className="textoCards">
                    Atendimento psicológico, pode ajudar muito uma pessoa LGBTQIA+ a viver com mais tranquilidade e segurança na sociedade perigosa em que vivemos, pensando em proporcionar ambientes seguros e acessíveis, para a comunidade Lgbt obter esse apoio, a assegura reúne algumas informações sobre onde encontrar profissionais preparades e instituições que fazem esse serviço.
                    </p>
                    <img className="img-fluid" style={{width:"20%", height: "60px", margin:"0 10px 0 auto", display:"inline"}}  src={imagParceria2} alt="" />
                    <img className="img-fluid" style={{width:"20%", margin:"0 auto 0 10px", display:"inline"}}  src={imagParceria3} alt="" />
                </div>

                <div className="descricaoJH" id="descricaoJ">
                    <h2>Direitos Lgbtqia+</h2>
                    <p className="textoCards">
                        A LGBTIfobia é o termo utilizado para compreender as violências cometidas contra a população LGBTI+ e se apresenta como uma série de atitudes ou sentimentos negativos em relação às pessoas LGBTI+, motivadas pela orientação sexual e/ou sua Identidade de gênero.
                    </p>
                    <img className="img-fluid" style={{width:"20%", height: "60px", margin:"0 10px 0 auto", display:"inline"}}  src={imagParceria} alt="" />
                    <img className="img-fluid" style={{width:"20%", margin:"0 auto 0 10px", display:"inline"}}  src={imagParceria4} alt="" />
                </div>

                <div className="descricaoCH" id="descricaoC">
                    <h2>Casas de acolhimento</h2>
                    <p className="textoCards">
                        Quando se é uma pessoa LGBTQIA+, a própria casa pode representar uma ameaça ou oferecer perigo. Pelo Brasil, as chamadas casas de acolhimento para pessoal LGBTQIA+ auxiliam com apoio moradia e projetos sociais ligados a educação e mercado de trabalho, conheça aqui algumas dessas casas. 
                    </p>
                    <img className="img-fluid" style={{width:"20%", margin:"auto", display:"block"}}  src={imagParceria3} alt="" />
                </div>

                <div className="descricaoAH" id="descricaoA">
                    <h2>Ajude</h2>
                    <p className="textoCards">
                        Nós da ASSEGURA LGBTQIA+ acreditamos que sua ajuda é muito importante e significativa para todes. Clique no botão saiba mais e conheça as formas que você pode contribuir e fazer parte de um mundo cada vez melhor e inclusivo.
                    </p>
                </div>
            </Col>

            <Col xs={6} className="middle">
                <div className="circlenav">
                    <img src={imglogo} className="logo" alt="" />
                    <ul className="iconsM">
                        <li className="item">
                            <div onClick={() => history.push(`/${'defesa-pessoal'}`)}
                                onMouseOver={() => document.getElementById('descricaoD').className='descricaoD'}
                                onMouseLeave={() => document.getElementById('descricaoD').className='descricaoDH'}
                            ><img src={img01} alt="" /></div>
                        </li>
                        <li className="item">
                            <div onClick={() => history.push(`/${'nome-social'}`)}
                                onMouseOver={() => document.getElementById('descricaoN').className='descricaoN'}
                                onMouseLeave={() => document.getElementById('descricaoN').className='descricaoNH'}
                            ><img src={img02} alt="" /></div>
                        </li>
                        <li className="item">
                            <div onClick={() => history.push(`/${'localizacoes'}`)}
                                onMouseOver={() => document.getElementById('descricaoL').className='descricaoL'}
                                onMouseLeave={() => document.getElementById('descricaoL').className='descricaoLH'}
                            ><img src={img03} alt="" /></div>
                        </li>
                        <li className="item">
                            <div onClick={() => history.push(`/${'ajude'}`)}
                                onMouseOver={() => document.getElementById('descricaoA').className='descricaoA'}
                                onMouseLeave={() => document.getElementById('descricaoA').className='descricaoAH'}
                            ><img src={img04} alt="" /></div>
                        </li>
                        <li className="item">
                            <div onClick={() => history.push(`/${'casa-de-acolhimento'}`)}
                                onMouseOver={() => document.getElementById('descricaoC').className='descricaoC'}
                                onMouseLeave={() => document.getElementById('descricaoC').className='descricaoCH'}
                            ><img src={img05} alt="" /></div>
                        </li>
                        <li className="item">
                            <div onClick={() => history.push(`/${'direitos-lgbtqia'}`)}
                                onMouseOver={() => document.getElementById('descricaoJ').className='descricaoJ'}
                                onMouseLeave={() => document.getElementById('descricaoJ').className='descricaoJH'}
                            ><img src={img06} alt="" /></div>
                        </li>
                        <li className="item">
                            <div onClick={() => history.push(`/${'ajuda-psicologica'}`)}
                                onMouseOver={() => document.getElementById('descricaoP').className='descricaoP'}
                                onMouseLeave={() => document.getElementById('descricaoP').className='descricaoPH'}
                            ><img src={img07} alt="" /></div>
                        </li>
                    </ul>
                </div>
            </Col>

            <Col xs={3} className="right">
                <div className="descricaoDH" id="descricaoD">
                    <h2>Defesa Pessoal</h2>
                    <p className="textoCards">
                        Pesquisas mostram que uma pessoa treinada para responder adequadamente a um ataque, 
                        pode até mesmo impedir que a agressão comece, pois, reagem ao perigo de forma mais assertiva e confiante, 
                        aumentando as chances de evitar situações violentas ou enfrentá-las com segurança. 
                    </p>
                    <img className="img-fluid" style={{width:"35%", margin:"auto", display:"block"}}  src={imagParceria} alt="" />
                </div>

                <div className="descricaoNH" id="descricaoN">
                    <h2>Nome social</h2>
                    <p className="textoCards">
                        Nomes estão diretamente ligados a um conceito de masculino e feminino 
                        em nossa sociedade. Felizmente, o processo para que pessoas trans possam
                        utilizar seu nome social em documentos oficiais ficou menos complicado e 
                        mais inclusivo.
                    </p>
                    <img className="img-fluid" style={{width:"40%", margin:"auto", display:"block"}}  src={imagParceria} alt="" />
                </div>

                <div className="descricaoLH" id="descricaoL">
                    <h2>Localizações</h2>
                    <p className="textoCards">
                        Conheça nosso mapa com a localização de 
                        Escolas de defesa pessoal 
                        Casas de acolhimento e Projetos sociais voltados para a comunidade 
                        Lgbtqia+
                        Centro de referência a Diversidade.
                    </p>
                </div>
            </Col>
            <Row id="carrosselHome">
                <CarrosselHome />
            </Row>
        </Row>
    </Container>
  );
};

export default Home;