import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import { statePisoA, getDataProg } from '../../public/data'
import { useMainState } from '../../libs/stateHooks'

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
		width: 90%;
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
	@media screen and (max-width: 800px) {
		font-size:16px;
	}
`
const SubTitle = styled.h2`
	margin: 0;
	margin-left:10%;
	margin-top: 1em;
	@media screen and (max-width: 800px) {
		margin-left:10px;
		font-size:18px;
		text-align:center;
	}
`
const Desc = styled.h3`
	margin: 0;
	margin-left:10%;
	font-weight: normal;
	text-align: center;
	@media screen and (max-width: 800px) {
		margin-left:10px;
		margin-right:10px;
		font-size:14px;
		text-align:center;
	}
`
const Margin=styled.div`
    margin-left:10%;
	@media screen and (max-width: 800px) {
		margin-left:0;
	}
`
const HallFame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 60px;
	max-width: 900px;
	font-weight: bold;
	background: #FFC024;
	box-sizing: border-box;
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	width: 90%;
	@media screen and (max-width: 800px) {
		width: 100%;
	}
	transition: .3s ease;
	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`
const Image = styled.img`
	margin-right: 1em;
`
const Ranking = () => {
	const [mState, setMainState] = useMainState()
	const openModal = (type) => {
		setMainState({
		  ...mState,
		  modal: {
			visibility: true,
			type: type
		  }
		})
	}
    const prog = getDataProg()
	return (
    <QV pg="Ranking">
		<Header
			title="Ranking"
			desc="Aqui podrás ver el avance del juego y el salón de la fama"
			imgH={imgCommon}
		/>
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
        <TitleBox>
			<Title>Salón de la fama</Title>
		</TitleBox>
		<Margin>
			<HallFame onClick={()=>openModal('Salon de la Fama')} data-tip data-for="dscTooltipHF">
				<Image src={`${prefix}/imgs/principal/hallfame.png`} alt="Hall Fame"/>
				Salon de la Fama
			</HallFame>
		</Margin>
		

        
        
        
	</QV>)
}

export default Ranking;