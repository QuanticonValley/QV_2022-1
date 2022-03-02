import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import { statePisoA, getDataProg } from '../../public/data'
import HallFame from '../../UIcomponents/hallFame.js';

const imgCommon = `${prefix}/imgs/header/info.png`

const TitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em 4em 0 0;
	margin-left: 5%;
`
const Title = styled.h3`
	border-bottom: 2px solid #ffc024;
`
const ContProg = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1em 0 2em 0;
`
const BarProg = styled.div`
	border: solid #1920EF;
	border-radius: .5em;
	height: 2.4em;
	width: 80%;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`
const Prog = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1920EF;
	border-radius: .2em 0 0 .2em;
	font-weight: bold;
	font-size: 1.2em;
	color: white;
	height: 100%;
	width: ${p => p.width};
`
const SubTitle = styled.h2`
	margin: 0;
	margin-top: 1em;
`
const Desc = styled.h3`
	margin: 0;
	font-weight: normal;
`
const Margin=styled.div`
    margin-left:3%;
    min-height:60%;
    background-color:#1920EF;
    border-radius:10px;
    @media screen and (max-width: 800px) {
		width: 80%;
	}
`
const Ranking = () => {

    const prog = getDataProg()
	return (
    <QV pg="Tabla de posiciones">
		<Header
			title="Tabla de posiciones"
			desc="Aqui podrás ver el avance del juego y el salón de la fama"
			imgH={imgCommon}
		/>
        
        <TitleBox>
			<Title>Salón de la fama</Title>
		</TitleBox>
        <Margin>
            <HallFame></HallFame>
        </Margin>
        <TitleBox>
			<Title>Avance del Juego</Title>
		</TitleBox>
		<ContProg>
			<BarProg>
				<Prog width={prog.num}>
					{prog.piso}
				</Prog>
			</BarProg>
			<SubTitle>{prog.title}</SubTitle>
			<Desc>{prog.desc}</Desc>
		</ContProg>
        
        
	</QV>)
}

export default Ranking;