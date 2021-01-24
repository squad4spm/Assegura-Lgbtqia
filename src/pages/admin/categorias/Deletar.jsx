import axios from "axios";

export const Deletar = ({data}) => {
  const handleOnDelete = () => {
    if ( window.confirm(`Deseja mesmo deletar ""${data.nome}""`)) {
      axios.delete(`http://app.toplojavirtual.com.br/categoria/${data.id}`).then(response=>{
        if(response.data.status === "OK"){
          window.location.reload()
        }
      })
    }
  };
  return <button onClick={handleOnDelete}>Deletar</button>;
};
