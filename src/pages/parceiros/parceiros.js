import "./parceiros.css"
import React, {useState, useEffect} from 'react';
import { Container } from "react-bootstrap";

export default () => {
  const [parceiros, setParceiros] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://assegura/Assegura-lgbtqia-back/parceiros-lista.php")
            const dados = await resposta.json()
            setParceiros(dados);
        }
        fetchData();
    }, []);

  return (
    <main>
      
      {parceiros.map((item) => (
        <Container>
            {item.nome}
        </Container>
      ))}
    </main>
  );
};