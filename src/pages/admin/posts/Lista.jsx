import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
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

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Conteúdo</th>
            <th>Imagem</th>
            <th>Link</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
        {posts.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>{item.image}</td>
            <td>{item.link}</td>
            <td>
              <button
                onClick={() => {
                  history.push(`/admin/edit/${item.id}`);
                }}
              >
                Editar
              </button>
            </td>
            <td>
              <Deletar data={item} />
            </td>
          </tr>
        ))}
        </tbody>
      </Table>

      <Switch>
        <Route path="/admin/new" component={FormNew} />
        <Route path="/admin/edit/:id" component={FormEdit} />
      </Switch>
    </>
  );
};
