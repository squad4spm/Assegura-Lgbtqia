import { Switch, Route } from "react-router-dom";

import * as Pages from "./pages"

/*
import defesaPessoal from "./pages/defesaPessoal/defesaPessoal.js";
import nomeSocial from "./pages/nomeSocial/nomeSocial.js";
import atendimentoPsicologico from "./pages/atendimentoPsicologico/atendimentoPsicologico.js";
import direitosLgbtqia from "./pages/direitosLgbtqia/direitosLgbtqia.js";
import casaDeAcolhimento from "./pages/casaDeAcolhimento/casaDeAcolhimento.js";
import localizacoes from "./pages/localizacoes/localizacoes.js";
*/

export default () => {
  return (
    <Switch>
      <Route exact path="/defesa-pessoal" component={Pages.defesaPessoal} />
      <Route exact path="/nome-social" component={Pages.nomeSocial} />
      <Route exact path="/atendimento-psicologico" component={Pages.atendimentoPsicologico} />
      <Route exact path="/direitos-lgbtqia" component={Pages.direitosLgbtqia} />
      <Route exact path="/casa-de-acolhimento" component={Pages.casaDeAcolhimento} />
      <Route exact path="/localizacoes" component={Pages.localizacoes} />
    </Switch>
  );
}