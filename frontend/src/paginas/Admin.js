import React from "react";
import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListaDevices from "./ListaDevices";
import Container from "react-bootstrap/Container";
import AdmDevices from "../componentes/AdmDevices";
import FormEdit from "../componentes/formEdit";

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    background-color: black;
    z-index: 5;
    h1{
        padding-left:1rem;
        font-weight: bold;
        color: yellow;
    }
`;

const Admin = ()=>{
    return(
        <Container>
            <Descricao>
                <h1>Admin</h1>
            </Descricao>
            <Tabs
                defaultActiveKey="profile"
                id="adm"
                className="mb-3"
            >
                <Tab eventKey="devices" title="Meus Devices">
                    <ListaDevices />
                </Tab>
                <Tab eventKey="detalhes" title="Detalhes">
                    <AdmDevices/>
                </Tab>
                <Tab eventKey="novo" title="Novo Device">
                    <h2>Novo Device</h2>
                </Tab>
            </Tabs>
        </Container>
    ) 
}
export default Admin