import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import {useApi} from '../hooks/useApi';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Foto = styled(Image)`
    height: 100px;
`;

function AdmDevices() {
    const [show, setShow] = useState(false)
    const {data} = useApi('/devices')
  return (
    <Container>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Device ID</th>
                        <th>Nome </th>
                        <th>Data de Cadastro</th>
                        <th>Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.message?.map(item =>{
                        return(
                            <tr>
                            <td><Foto src = {item.imagem}></Foto></td>
                            <td>{item._id}</td>
                            <td>{item.nome}</td>
                            <td>{moment(item.data).format('DD-MM-AAAA')}</td>
                            <td>
                                <Button variant="info">Editar</Button>&nbsp;&nbsp;
                                <Button variant="danger">Deletar</Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
    </Container>
  )
}

export default AdmDevices