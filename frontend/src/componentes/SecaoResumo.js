import React from 'react'
import styled from 'styled-components'

const Inicio = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`;
const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    h1{
        font-weight: bold;
        font-size: 3rem;
        color: yellow;
    }
    h2{
        font-weight: bold;
        font-size: 2rem;
        color: yellow;
    }
`;
const SecaoResumo = ()=>{
    return(
        <Inicio>
            <Descricao>
                <h1>Solar Open</h1>
                <h2>Emp tech.</h2>
                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                    de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu 
                    não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo 
                    essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
                    contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a 
                    softwares de editoração eletrônica como Aldus PageMaker.
                </p>
                <button>Fale conosco</button>
            </Descricao>
        </Inicio>
    )
}
export default SecaoResumo