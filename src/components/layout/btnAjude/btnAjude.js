import { useHistory } from 'react-router-dom';
import "./btnAjude.css";

export const BtnAjude = () => {
  
  const history = useHistory();

  const menuItens = [
    {
      label: "Ajude",
      path: "ajude"
    },
  ];

  return (
    <div id="botao_flutuante">
      {menuItens.map((iten) => (
        <p onClick={() => history.push(`/${iten.path}`)}>Ajude!<i className="fas fa-mouse"></i></p>
      ))}
    </div>
  );
};