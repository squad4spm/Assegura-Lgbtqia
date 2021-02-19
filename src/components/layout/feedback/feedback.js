import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import "./footer.css";

export const Feedback = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);

  let tabelaFeed = "";

  if (window.location.pathname === "/defesa-pessoal") {
    tabelaFeed = "avaliacoes"
  } else if (window.location.pathname === "/nome-social") {
    tabelaFeed = "avaliacoesnome"
  } else if (window.location.pathname === "/direitos-lgbtqia") {
    tabelaFeed = "avaliacoesdireitos"
  } else if (window.location.pathname === "/casa-de-acolhimento") {
    tabelaFeed = "avaliacoescasa"
  } else if (window.location.pathname === "/localizacoes") {
    tabelaFeed = "avaliacoeslocalizacoes"
  } else if (window.location.pathname === "/ajude") {
    tabelaFeed = "avaliacoesajude"
  } else if (window.location.pathname === "/ajuda-psicologica") {
    tabelaFeed = "avaliacoespsico"
  }

  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data) => {
    console.log("teste ok")
    axios.post(`https://app-toplojavirtual-com-br.umbler.net/${tabelaFeed}`, data).then((response) => {
      if (response.data.status === "OK") {
        alert("Feedback recebido com sucesso");

        window.location.reload()
      }
    });
  };

  useEffect(() => {
    axios.get(`https://app-toplojavirtual-com-br.umbler.net/${tabelaFeed}`).then((response) => {
      setAvaliacoes(response.data[tabelaFeed]);
    });
  }, []);

  let total = 0;
  let media = 0;

  for (let i = 0; i < avaliacoes.length; i++) {
    //console.log(avaliacoes[i].nota);

    if(avaliacoes.length !== 0){
      let valor = parseFloat(avaliacoes[i].nota);
      total = total + valor;

      media = total / avaliacoes.length;
      Math.round(media);
    }else{
      total = 0 
    }

  }

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <div id='avaliacao'>
              <form id="formAvaliacao" onSubmit={handleSubmit(handleOnSubmit)}>
                <div id='linhaA' className="row">
                  <div className="estrelas">
                    <input type="radio" id="cm_star-empty" name="nota" value="" />
                    <label for="cm_star-1"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-1" value="1" name="nota" ref={register} />
                    <label for="cm_star-2"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-2" value="2" name="nota" ref={register} />
                    <label for="cm_star-3"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-3" value="3" name="nota" ref={register} />
                    <label for="cm_star-4"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-4" value="4" name="nota" ref={register} />
                    <label for="cm_star-5"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-5" value="5" name="nota" ref={register} />
                  </div>
                  <button id='btnEnviar' form="formAvaliacao">Enviar</button>
                </div>
                <input id="sugestao" type="text" placeholder="sugestões" name="comentario" ref={register} />
              </form>
            </div>
          </div>

          <div className="col">
            <div className="estrelas">{[...new Array(5)].map((item, key) => (
              <label for="cm_star-1R" key={key}><i style={ key >= media ? {opacity: '.1'} : {opacity: '1'} } class="fa"></i></label>
            ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Feedback;