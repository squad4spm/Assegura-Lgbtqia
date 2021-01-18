import './App.css';

import Rotas from './rotas.js';
import {Layout} from './components/layout/layout.js'
import MyContextProvider from './contexts/MyContext';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <MyContextProvider>
        <BrowserRouter>
        <Layout>
          <Rotas />
        </Layout>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
