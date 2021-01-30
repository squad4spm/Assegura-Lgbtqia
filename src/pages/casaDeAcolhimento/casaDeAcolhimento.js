import Banner from './banner/Banner'
import SobreCasaChama from './sobreCasaChama/SobreCasaChama'
import SobreCasaFlorecer from './sobreCasaFlorecer/SobreCasaFlorecer'
import SobreCasaUm from './sobreCasaUm/SobreCasaUm'
import Contatos from './contatos/Contatos'

const casaDeAcolhimento = () => {

  return (
    <>
      <Banner/>
      <SobreCasaChama/>
      <SobreCasaFlorecer/>
      <SobreCasaUm/>
      <Contatos/>
    </>
  );
};

export default casaDeAcolhimento;