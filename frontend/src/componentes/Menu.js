import React from 'react'
import Userfront from '@userfront/react'
import { LogoutButton } from './autentica/Autenticacao';
import Styled from 'styled-components'
import {Link} from 'react-router-dom'


Userfront.init("qbjqg94n")

const StyledNav = Styled.nav`
    background: #58617B;
    color: white;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 2rem;
    }
    a{
        color: white;
        text-decoration: none;
        &:hover{
            background-color: black;
            color: white;
        }
    }
    h5{
        color: yellow;
    }

`;

const Menu = ()=>{
    return(
        <StyledNav>
            <h1>Solar Open</h1>
            <ul>
                <li><Link to='/'>Bem vindo</Link></li>
                <li><Link to='/Mensagens'>Mensagens</Link></li>
                {!Userfront.accessToken() && (
                        <>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/cadastro'>Cadastro</Link></li>
                        </>
                )}
                {Userfront.accessToken() && (
                        <>
                            <li><Link to='/Medidas'>Medidas</Link></li>
                            <li><Link to='/Admin'>Administração</Link></li>
                            <li><Link to='/logout'><LogoutButton/></Link></li>
                        </>
                )}
                
            </ul>
        </StyledNav>
    )
}
export default Menu

