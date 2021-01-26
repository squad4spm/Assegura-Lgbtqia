import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { FormNew } from "./FormNew";
import { FormEdit } from "./FormEdit";
import { Deletar } from "./Deletar";

export const Lista = ({ history }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://app.toplojavirtual.com.br/post").then((response) => {
      setPosts(response.data.posts);
    });
  }, []);

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

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
        {posts.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>
              <Button
                onClick={() => {
                  history.push(`/admin/posts/edit/${item.id}`);
                }}
              >
                Editar
              </Button>
            </td>
            <td>
              <Deletar data={item} />
            </td>
          </tr>
        ))}
        </tbody>
      </Table>

      <Switch>
        <Route path="/admin/posts/new" component={FormNew} />
        <Route path="/admin/posts/edit/:id" component={FormEdit} />
      </Switch>
    </>
  );
};
