import React from "react";
//import moment from 'moment'
import styled from "styled-components";
import FormContato from "../componentes/FormContato";

const ContStyled = styled.div`
	padding: 1rem 10rem;
	color: #353535;
	min-height: 90vh;
`;

const Title = styled.h1`
	color: yellow;
	font-weight: bold;
	margin-bottom: 4rem;
`;

const FaleConosco = () => {
	return (
		<ContStyled>
			<Title>Fale Conosco</Title>
			<FormContato />
		</ContStyled>
	);
};
export default FaleConosco;
