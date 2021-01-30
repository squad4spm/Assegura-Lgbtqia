import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
    margin-left: auto;
    display: block;
    padding: 5px 20px;
    border-radius: 4px;
    border: 1px solid #333;
    margin-bottom: 10px;
    background: #400040;
    color: white;
  `;

export const Deletar = ({data}) => {
  const handleOnDelete = () => {
    if ( window.confirm(`Deseja mesmo deletar ""${data.title}""`)) {
      axios.delete(`http://app.toplojavirtual.com.br/post/${data.id}`).then(response=>{
        if(response.data.status === "OK"){
          window.location.reload()
        }
      })
    }
  };
  return <Button onClick={handleOnDelete}>Deletar</Button>;
};