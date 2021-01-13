import "./home.css"
import { Container, Col, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import imglogo from "../../assets/images/logoAssegura.png";

import img01 from "../../assets/images/selfDefense.png";
import img02 from "../../assets/images/doc.png";
import img03 from "../../assets/images/map.png";
import img04 from "../../assets/images/shake.png";
import img05 from "../../assets/images/house.png";
import img06 from "../../assets/images/law.png";
import img07 from "../../assets/images/psicologhy.png";

export default () => {

    const history = useHistory();

  return (
    <Container fluid>
        <Row id="bcg">
            <Col xs={3} className="left">
                <div class="descricaoPH" id="descricaoP">
                    <h2>Psicológico</h2>
                    <p class="textoCards">
                        Cadastro Para Psicólogos Voluntários
                        <br />
                        Cadastro Para Conseguir Atendimento  
                    </p>
                </div>

                <div class="descricaoJH" id="descricaoJ">
                    <h2>Direitos Lgbtqia+</h2>
                    <p class="textoCards">
                        Direito Civil Brasileiro
                        <br />
                        Evolução dos Direitos LGBTQI+
                    </p>
                </div>

                <div class="descricaoCH" id="descricaoC">
                    <h2>Casas de acolhimento</h2>
                    <p class="textoCards">
                        Conheça algumas Casas De Acolhimento Localizadas em São Paulo.
                    </p>
                </div>

                <div class="descricaoAH" id="descricaoA">
                    <h2>Ajude</h2>
                    <p class="textoCards">
                        Nós do ASSEGURA LGBTQIA+ acreditamos que sua ajuda é muito importante e significativa para todos. 
                        Clique no botão saiba mais e conheça as formas que você pode contribuir e fazer parte de um mundo 
                        cada vez melhor e inclusivo.
                    </p>
                </div>
            </Col>

            <Col xs={6} className="middle">
                <div class="circlenav">
                    <img src={imglogo} class="logo" />
                    <ul class="iconsM">
                        <li class="item">
                            <a onClick={() => history.push(`/${'defesa-pessoal'}`)}
                                onMouseOver={() => document.getElementById('descricaoD').className='descricaoD'}
                                onMouseLeave={() => document.getElementById('descricaoD').className='descricaoDH'}
                            ><img src={img01} /></a>
                        </li>
                        <li class="item">
                            <a onClick={() => history.push(`/${'nome-social'}`)}
                                onMouseOver={() => document.getElementById('descricaoN').className='descricaoN'}
                                onMouseLeave={() => document.getElementById('descricaoN').className='descricaoNH'}
                            ><img src={img02} /></a>
                        </li>
                        <li class="item">
                            <a onClick={() => history.push(`/${'localizacoes'}`)}
                                onMouseOver={() => document.getElementById('descricaoL').className='descricaoL'}
                                onMouseLeave={() => document.getElementById('descricaoL').className='descricaoLH'}
                            ><img src={img03} /></a>
                        </li>
                        <li class="item">
                            <a onClick={() => history.push(`/${'ajude'}`)}
                                onMouseOver={() => document.getElementById('descricaoA').className='descricaoA'}
                                onMouseLeave={() => document.getElementById('descricaoA').className='descricaoAH'}
                            ><img src={img04} /></a>
                        </li>
                        <li class="item">
                            <a onClick={() => history.push(`/${'casa-de-acolhimento'}`)}
                                onMouseOver={() => document.getElementById('descricaoC').className='descricaoC'}
                                onMouseLeave={() => document.getElementById('descricaoC').className='descricaoCH'}
                            ><img src={img05} /></a>
                        </li>
                        <li class="item">
                            <a onClick={() => history.push(`/${'direitos-lgbtqia'}`)}
                                onMouseOver={() => document.getElementById('descricaoJ').className='descricaoJ'}
                                onMouseLeave={() => document.getElementById('descricaoJ').className='descricaoJH'}
                            ><img src={img06} /></a>
                        </li>
                        <li class="item">
                            <a onClick={() => history.push(`/${'atendimento-psicologico'}`)}
                                onMouseOver={() => document.getElementById('descricaoP').className='descricaoP'}
                                onMouseLeave={() => document.getElementById('descricaoP').className='descricaoPH'}
                            ><img src={img07} /></a>
                        </li>
                    </ul>
                </div>
            </Col>

            <Col xs={3} className="right">
                <div class="descricaoDH" id="descricaoD">
                    <h2>Defesa Pessoal</h2>
                    <p class="textoCards">
                        Pesquisas mostram que uma pessoa treinada para responder adequadamente a um ataque, 
                        pode até mesmo impedir que a agressão comece, pois, reagem ao perigo de forma mais assertiva e confiante, 
                        aumentando as chances de evitar situações violentas ou enfrentá-las com segurança. 
                    </p>
                </div>

                <div class="descricaoNH" id="descricaoN">
                    <h2>Nome social</h2>
                    <p class="textoCards">
                        Nomes estão diretamente ligados a um conceito de masculino e feminino 
                        em nossa sociedade. Felizmente, o processo para que pessoas trans possam
                        utilizar seu nome social em documentos oficiais ficou menos complicado e 
                        mais inclusivo.
                    </p>
                </div>

                <div class="descricaoLH" id="descricaoL">
                    <h2>Localizações</h2>
                    <p class="textoCards">
                        Conheça nosso mapa com a localização de 
                        Escolas de defesa pessoal 
                        Casas de acolhimento e Projetos sociais voltados para a comunidade 
                        Lgbtqia+
                        Centro de referência a Diversidade.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
  );
};