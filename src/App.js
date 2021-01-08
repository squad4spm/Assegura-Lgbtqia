import './App.css';

import Rotas from './rotas.js';
import {Layout} from './components/layout/layout.js'

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Rotas />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
