import Banner from './banner/Banner'
import SobreCasaChama from './sobreCasaChama/SobreCasaChama'
import SobreCasaFlorecer from './sobreCasaFlorecer/SobreCasaFlorecer'
import SobreCasaUm from './sobreCasaUm/SobreCasaUm'
import Contatos from './contatos/Contatos'

import Feedback  from "../../components/layout/feedback/feedback";

const casaDeAcolhimento = () => {

  return (
    <>
      <Banner/>
      <SobreCasaChama/>
      <SobreCasaFlorecer/>
      <SobreCasaUm/>
      <Contatos/>
      <Feedback />
    </>
  );
};

export default casaDeAcolhimento;