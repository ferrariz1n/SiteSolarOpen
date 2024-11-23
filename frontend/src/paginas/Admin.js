import React, {useEffect} from 'react'
import styled  from 'styled-components'
import {Container, Tabs, Tab} from "react-bootstrap"
import ListaDevices from '../componentes/admin/ListaDevices';
import AdmDevices from '../componentes/admin/AdmDevices';
import NovoDevice from '../componentes/admin/NovoDevice'
import {useNavigate} from 'react-router-dom'
import Userfront from '@userfront/react'
import jwtDecode from 'jwt-decode'

Userfront.init("qbjqg94n")

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    padding-top: 1rem;
    background-color: black;
    z-index: 5;
    h1{
        padding-left: 1rem;
        font-weight: bold;
        color: yellow;
    }
`;

 const Geral = styled.div`
    h5{
        padding-left: 2rem;
        color: yellow;
        font-weight: bold;
    }
 `;

 
const Admin = ({location})=>{
    let navigate = useNavigate();
    useEffect(() => {
        if (!Userfront.accessToken()){
            localStorage.setItem('us', ' ')
            return navigate("/login")
        }
    })
    const acessoData = jwtDecode(Userfront.accessToken())
    const acesso = JSON.stringify(acessoData)
    console.log(acesso)
    const userData = jwtDecode(Userfront.idToken())
    const user = JSON.stringify(userData)
    console.log(user)

    return(
        <Geral>
            <Container>
                <Descricao>
                    <h1>
                        Área Administrativa
                    </h1>
                </Descricao>
            </Container>
            <div>
                <Tabs defaultActiveKey="devices" id="tab1" className="mb-1">
                    <Tab eventKey="devices" title="Meus Devices">
                        <ListaDevices/>
                    </Tab>
                    <Tab eventKey="detalhes" title="Detalhes">
                        <AdmDevices/>
                    </Tab>
                    <Tab eventKey="novo" title="Novo Device">
                        <NovoDevice/>
                    </Tab>
                    <Tab eventKey="email" title="User Logado">
                        <h5>{userData.email}</h5>
                    </Tab>
                </Tabs>
            </div>
      </Geral>
    )
}
export default Admin