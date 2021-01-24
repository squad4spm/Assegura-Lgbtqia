import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import { FormNew } from "./FormNew";
import { FormEdit } from "./FormEdit";
import { Deletar } from "./Deletar";

export const Lista = ({ history }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/categoria").then((response) => {
      setCategorias(response.data.categorias);
    });
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
        {categorias.map((item) => (
          <tr key={item.id}>
            <td>{item.nome}</td>
            <td>
              <button
                onClick={() => {
                  history.push(`/admin/categorias/edit/${item.id}`);
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
        <Route path="/admin/categorias/new" component={FormNew} />
        <Route path="/admin/categorias/edit/:id" component={FormEdit} />
      </Switch>
    </>
  );
};
