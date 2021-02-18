import "./footer.css";

export const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <div id='avaliacao'>
              <div id='linhaA' className="row">
                <div className="estrelas">
                  <input type="radio" id="cm_star-empty" name="fb" value="" checked/>
                  <label for="cm_star-1"><i class="fa"></i></label>
                  <input type="radio" id="cm_star-1" name="fb" value="1"/>
                  <label for="cm_star-2"><i class="fa"></i></label>
                  <input type="radio" id="cm_star-2" name="fb" value="2"/>
                  <label for="cm_star-3"><i class="fa"></i></label>
                  <input type="radio" id="cm_star-3" name="fb" value="3"/>
                  <label for="cm_star-4"><i class="fa"></i></label>
                  <input type="radio" id="cm_star-4" name="fb" value="4"/>
                  <label for="cm_star-5"><i class="fa"></i></label>
                  <input type="radio" id="cm_star-5" name="fb" value="5"/>
                </div>
                <button id='btnEnviar'>Enviar</button>
              </div>
              <input id="sugestao" type="text"  placeholder="sugestões" />
            </div>
          </div>

          <div className="col">
            <div className="estrelas">
              <input type="radio" id="cm_star-emptyR" name="fbr" value="" checked/>
              <label for="cm_star-1R"><i class="fa"></i></label>
              <input type="radio" id="cm_star-1R" name="fbr" value="1"/>
              <label for="cm_star-2R"><i class="fa"></i></label>
              <input type="radio" id="cm_star-2R" name="fbr" value="2"/>
              <label for="cm_star-3R"><i class="fa"></i></label>
              <input type="radio" id="cm_star-3R" name="fbr" value="3"/>
              <label for="cm_star-4R"><i class="fa"></i></label>
              <input type="radio" id="cm_star-4R" name="fbr" value="4"/>
              <label for="cm_star-5R"><i class="fa"></i></label>
              <input type="radio" id="cm_star-5R" name="fbr" value="5"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
              <br />
              <p>ASSEGURA LGBTQIA+ | TODOS OS DIREITOS RESERVADOS | DESENVOLVIDO POR SQUAD 4 - SPM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};