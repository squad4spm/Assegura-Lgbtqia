import { Switch, Route, BrowserRouter } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {LayoutAdmin} from "./components/LayoutAdmin/LayoutAdmin";
import { Layout } from "./components/layout/layout";

import * as Pages from "./pages";
import * as PagesAdmin from "./pages/admin";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <PrivateRoute>
            <LayoutAdmin>
              <Route path="/admin" component={PagesAdmin.posts}  />
              <Route path="/admin/categorias" component={PagesAdmin.categorias}/>
            </LayoutAdmin>
          </PrivateRoute>
        </Route>

        <Route path="/">
          <Layout>
            <Route exact path="/" component={Pages.home} />
            <Route
              exact
              path="/defesa-pessoal"
              component={Pages.defesaPessoal}
            />
            <Route exact path="/nome-social" component={Pages.nomeSocial} />
            <Route
              exact
              path="/ajuda-psicologica"
              component={Pages.ajudaPsicologica}
            />
            <Route
              exact
              path="/direitos-lgbtqia"
              component={Pages.direitosLgbtqia}
            />
            <Route
              exact
              path="/casa-de-acolhimento"
              component={Pages.casaDeAcolhimento}
            />
            <Route exact path="/localizacoes" component={Pages.localizacoes} />
            <Route exact path="/ajude" component={Pages.ajude} />
            <Route exact path="/pages-login" component={Pages.login} />
            <Route exact path="/perfil" component={Pages.perfil} />
            <Route exact path="/cadastro" component={Pages.cadastro} />
            <Route exact path="/voluntarios" component={Pages.voluntarios} />
            <Route exact path="/parceiros" component={Pages.parceiros} />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
