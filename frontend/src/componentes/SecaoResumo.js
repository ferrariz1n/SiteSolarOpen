import React from 'react'
import styled from "styled-components";

const SecaoResumo = ()=>{
    return(
        <Inicio>
            <Descricao>
                <h1>Solar Open</h1>
                <h2>Monitoramento Solar</h2>
                <p>
                    Somos uma empresa de monitoramento residencial e empresarial
                </p>
                <button>Faça Contato</button>
            </Descricao>
        </Inicio>
    )
}

const Inicio = styled.div`  // Inicio vai substituir a div principal de BenvindoSection
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const Descricao = styled.div`  // Aqui iremos colocar em BenvindoSection, uma div para a descrição e o botão
    flex: 1;
    padding-right: 5rem;
    z-index: 5;

    h1{
        font-weight: bold;
        color: yellow;
    }
    p{
        font-size: 18px;
        color: white;
    }
`;

export default SecaoResumo