import React from 'react';
import { Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";

const initialValues = {
    userId: 14,
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
}

export default () => {
    const [values, setValues] = React.useState(initialValues)

    console.log("euu", { values })

    const HandleonChange = e => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value })
    }


    const handleOnEndereco = () => {
       const result =  axios.post("http://app.toplojavirtual.com.br/endereco", values).then(response=> console.log("euu", response)).catch(err=> console.log("euu", err))

       console.log('euu', result)
    }

    return (
        <Row className="coluna2">
            <Form onSubmit={handleOnEndereco}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress1" lg={12}>
                        <Form.Label id="formLabel">Rua:</Form.Label>
                        <Form.Control name="rua" type="text" placeholder="Ex: Rua xxxx 1234" onChange={HandleonChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress1" lg={12}>
                        <Form.Label id="formLabel">Numero:</Form.Label>
                        <Form.Control name="numero" type="text" placeholder="Ex: Rua xxxx 1234" onChange={HandleonChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress2" lg={12}>
                        <Form.Label id="formLabel">Bairro:</Form.Label>
                        <Form.Control name="bairro" type="text" placeholder="Apartmento, studio, piso ou sitio" onChange={HandleonChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity" xs={12} lg={12}>
                        <Form.Label id="formLabel">Cidade:</Form.Label>
                        <Form.Control name="cidade" type="text" placeholder="Digite sua cidade" onChange={HandleonChange}></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" xs={12} lg={12}>
                        <Form.Label id="formLabel">Estado:</Form.Label>
                        <Form.Control name="estado" type="text" as="select" defaultValue="Choose..." onChange={HandleonChange}>
                            <option>São Paulo</option>
                            <option>Rio de Janeiro</option>
                            <option>Outro</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip" xs={12} lg={12}>
                        <Form.Label id="formLabel">CEP :</Form.Label>
                        <Form.Control name="cep" placeholder="0000-000" onChange={HandleonChange}></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className="botaoEdit">Salvar alterações</Button>
            </Form>
        </Row>
    );
}