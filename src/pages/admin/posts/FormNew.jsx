import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";

const Container = styled.div`
  position: fixed;
  top: 50px;
  width: 600px;
  height: 600px;
  background: #dedede;
  border: 1px solid #333;
  padding: 40px;
`;

const Close = styled.span`
  position: absolute;
  top: -40px;
  right: 0px;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 30px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-bottom: 50px;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-radius: 4px;
  border: 1px solid #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-left: auto;
  display: block;
  padding: 10px 30px;
  border-radius: 4px;
  border: 1px solid #333;
  margin-bottom: 20px;
`;

export const FormNew = ({ history }) => {
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data) => {
    axios.post("http://app.toplojavirtual.com.br/post", data).then((response) => {
      if (response.data.status === "OK") {
        alert("Cadastrado com Sucesso");

        history.push("/admin");

        window.location.reload()
      }
    });
  };

  return (
    <Container>
      <Close
        onClick={() => {
          history.push("/admin");
        }}
      >
        X
      </Close>

      <Title>Criar Post</Title>

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Label>Titulo do Post:</Label>
        <Input type="text" name="title" ref={register} />
        <Label>Conteudo:</Label>
        <Input type="text" name="content" ref={register} />
        <Label>Imagem:</Label>
        <Input type="text" name="image" ref={register} />
        <Label>Link:</Label>
        <Input type="text" name="link" ref={register} />
        <Button>Enviar</Button>
      </form>
    </Container>
  );
};
