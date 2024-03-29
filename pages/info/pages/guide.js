import styled from 'styled-components';
import Pdf from '../../../UIcomponents/pdf';
import { prefix } from '../../../utils/prefix';

const Title = styled.h3`
	font-size: 20px;
	font-weight: 700;
`
const ExtLink= styled.div`
	color: blue;
	font-weight: 500;
	text-align: right;
	margin-right: 8%;
	@media screen and (max-width: 800px) {
		font-size: 14px;
	}
`

const Guide = () => {
	return <div>
		<Title></Title>
		<Pdf file={"content/Guia del Jugador 2022-3.pdf"}></Pdf>
		<ExtLink><a href={`${prefix}/content/Guia del Jugador 2022-3.pdf`} target="_blank" rel="noreferrer">¿Cargar en una pestaña nueva?</a></ExtLink>
    </div>
}

export default Guide;
