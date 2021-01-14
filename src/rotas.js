import { Switch, Route } from "react-router-dom";

import * as Pages from "./pages"

export default () => {
  return (
    <Switch>
      <Route exact path="/home" component={Pages.home} />
      <Route exact path="/defesa-pessoal" component={Pages.defesaPessoal} />
      <Route exact path="/nome-social" component={Pages.nomeSocial} />
      <Route exact path="/atendimento-psicologico" component={Pages.atendimentoPsicologico} />
      <Route exact path="/direitos-lgbtqia" component={Pages.direitosLgbtqia} />
      <Route exact path="/casa-de-acolhimento" component={Pages.casaDeAcolhimento} />
      <Route exact path="/localizacoes" component={Pages.localizacoes} />
      <Route exact path="/ajude" component={Pages.ajude} />
<<<<<<< HEAD
      <Route exact path="/pages-login" component={Pages.login} />
=======
      <Route exact path="/perfil" component={Pages.perfil} />
>>>>>>> ffccfb6684e18eb04105a8708f5fa84d8cf8243f
    </Switch>
  );
}