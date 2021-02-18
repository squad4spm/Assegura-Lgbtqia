import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Estagios from "./components/Estagios";
import Passagem from "./components/Passagem";

const App = () => {
  return (
    <Provider store={store}>
      <Estagios />
      <Passagem />
    </Provider>
  );
};
export default App;
