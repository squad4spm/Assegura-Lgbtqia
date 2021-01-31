import "./ajude.css"
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button } from "react-bootstrap";

import img01 from "../../assets/images/ajude02.jpg";
import img02 from "../../assets/images/ajude04.jpg";
import img03 from "../../assets/images/ajude05.jpg";
import img04 from "../../assets/images/ajude08.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const history = useHistory();

    return (
    <Container fluid>
    <section id="pg_defesa_pessoal_banner" >
        <div className="jumbotron card card-image  d-block ajude">
            <p className="mx-2 mb-4">Ajude Nossa <br /> Causa!</p>
        </div>
    </section>

    <section id="pg_defesa_pessoal_primeiraClass" className="container">
        <div className="row">
            <div className="col-md-6">
                <p>Com o intuito de ajudar as pessoas da comunidade LGBTQIA+ em situação de vulnerabilidade social, criamos meios que você pode de forma totalmente voluntária ajudar nessa missão tão importante que é vivermos em um país inclusivo onde todas as pessoas podem expressar suas vontades normalmente sem serem ofendidas pela sua orientação sexual.</p>
            </div>
            <div className="col-md-6">""
                <img src={img01} className="img-fluid" alt=""/>
            </div>
        </div>
    </section>

    <section id="pg_defesa_pessoal_segundaClass" className="container-fluid my-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-5">
                    <p>Pensando nisso, nasceu o ASSEGURA que tem como objetivo principal contribuir por meio da informação, a segurança preventiva contra a violência das pessoas que fazem parte da comunidade LGBTQIA+ em diversos âmbitos da sociedade, seja ela física ou psicológica.</p>
                    <p>Vamos nessa? Fique à vontade para contribuir da maneira que se sentir mais confortável e vamos juntos nessa corrente do bem. </p>
                </div>
            </div>
            <div>
                <div className="row py-4">
                    <div className="col-md-6">
                        <img src={img02} className="img-fluid" alt=""/>
                    </div>
                    <div className="col my-5">
                        <p>Por que ajudar? O Brasil é o país que mais sofre com a violência contra a comunidade LGBTQIA+, para mudarmos esse triste cenário que tal unirmos forças para combatermos essa realidade? O ASSEGURA LGBTQIA+ conta com sua contribuição para cada vez mais vivermos em um país mais inclusivo e melhor para todos :D</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="container-fluid terceiraClass">
    <Button id="btnCadastrese" onClick={() => history.push(`/cadastro`)}>Cadastre-se</Button>
    </section>
    <section className="container-fluid quartaClass">
        <div className="container">
            <div className="row my-3">
                <div className="col">
                    <h3>Veja abaixo mais informações de como você pode ajudar a comuidade LGBTQIA+</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <img src={img03} className="mr-3 img-fluid" alt="Conheça a primeira Trans faixa-preta de Jiu-Jitsu" />
                    
                </div>

                <div className="col-md-3">
                
                    <h5 className="mt-0">Saiba como AJUDAR!</h5>
                    <p>Contribua com nossa causa e ajude as pessoas que estão em situação de vulnerabilidade social da nossa comunidade. Confira ao lado como colaborar....</p>
                </div>

                <div className="col-md-3">
                    <img src={img04} className="mr-3 img-fluid" alt="“Sem ver diferenças”: É possível diversidade e inclusão nos treinos de artes marciais?" /> 
                </div>

                <div className="col-md-3">
                    
                    <h5 className="mt-0">Doar Faz Bem</h5>
                    <h6>Banco Santander <br />
                    <h6>Ag - 0000 <br />
                    Cc - 00000-0</h6> <br />
                    </h6>
                    <h6>Banco Itaú <br />
                    <h6>Ag - 0000 <br />
                    Cc - 00000-0</h6> <br />
                    </h6>
                </div>
            </div>
        </div>
    </section>
    </Container >
  );
};