import { useState, useEffect } from 'react'
import { prefix } from '../../utils/prefix.js';
import { getEtesc, getPisoTitle } from '../../public/data'
import { useMainState } from '../../libs/stateHooks'
import { getAsesorSrc, getLobbyData, statePiso, getPisoData } from "../../public/data";
import ListItems from './components/listItems'
import styled from 'styled-components'
import ItemList from '../../UIcomponents/SrcItemList'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import PisosSel from '../../UIcomponents/pisoSel'
import GroupSel from '../../UIcomponents/groupSel'

const TitleCont = styled.h2`
	font-weight: 600;
	font-size: 24px;
	@media screen and (max-width: 824px) {
		font-size: 18px;
	}
	line-height: 52px;
	letter-spacing: -0.03em;
	color: #272835;
	margin: 0px;
	display: inline;
	z-index: 2
	
	`
const imgEtesc = `${prefix}/imgs/header/etesc.png`

const Title = styled.h2`
	font-weight: 700;
	font-size: 35px;
	line-height: 42px;
	letter-spacing: -0.03em;
	color: #272835;
	margin-bottom: 20px;
	z-index: 2;
	@media screen and (max-width: 1200px) {
		font-size: 22px;
		font-weight:700;
		line-height:28px;
	}
`
const Margin = styled.div`
	margin: 0 20px;
`
const Card=styled.div`
	border-radius:10px;
`
const Head=styled.div`
	background-color: #e0e5ed;
	padding-left: 10px;
	border-radius:10px;
	cursor:pointer;
`
const Icon=styled.img`
	display: inline;
	margin-left:10px;
	margin-right:30px;
`
const Content= styled.div`
	transition:0.8s all;
	max-height:${p => p.alt}px;
	overflow:hidden;
	padding:10px;
	@media screen and (max-width: 800px) {
		max-height:${p => 2*p.alt}px;
	}
`
const Parrafo=styled.p`
	@media screen and (max-width: 800px) {
		font-size:13px;
	}
`


const Etesc = () => {
  	const [mState, setMainState] = useMainState()
	const group = mState.group ? mState.group : 'dos'
	const piso = mState.piso ? mState.piso : 1
	const pisoTitle = getPisoTitle(piso)
	const pisoA = statePiso()
	const [pisoCont,setPisoCont]= useState({})
	useEffect(() => {
		setPisoCont(getPisoData(group, piso))
	}, [group, piso])
	
	const [open1,setOpen1]=useState(0);
	const [open2,setOpen2]=useState(0);
	const [open3,setOpen3]=useState(0);
	function cambio(a){
		if(a===1){open1===0?setOpen1(1600):setOpen1(0);}
		if(a===2){open2===0?setOpen2(1600):setOpen2(0);}
		if(a===3){open3===0?setOpen3(1600):setOpen3(0);}
	}
	return <QV pg="ETESC">
		<Header
			title="ETESC"
			desc="Edificio Tecnológico de Empredimiento Sostenible"
			imgH={imgEtesc}
		/>
		<Margin>
			<Parrafo>
				En esta sección podras realizar los entregables más importantes en el desarrollo de tu proyecto los cuales te permitiran avanzar al proximo piso. 
				Con estos y otros retos podras ganar Innocoins y Puntos de Victoria .
			</Parrafo>
			<Parrafo>
				Por favor selecciona tu grupo, ¡ten en cuenta que el contenido varía según el grupo que escojas!
			</Parrafo>	
			<GroupSel/>
			<PisosSel/>
			<Title>{pisoTitle}</Title>

			
			<Card>
				<Head onClick={()=>cambio(1)}>
					{open1===0
					?<Icon src={`${prefix}/imgs/main/Icon_flecha_abajo.png`}></Icon>
					:<Icon src={`${prefix}/imgs/main/Icon_flecha_arriba.png`}></Icon>
					}
					<TitleCont>Retos de piso</TitleCont>
				</Head>
				<Content alt={open1}>
						<ListItems data={pisoCont} tipo={1}></ListItems>
				</Content>
			</Card>
			<Card>
				<Head onClick={()=>cambio(2)}>
					{open2===0
					?<Icon src={`${prefix}/imgs/main/Icon_flecha_abajo.png`}></Icon>
					:<Icon src={`${prefix}/imgs/main/Icon_flecha_arriba.png`}></Icon>
					}
					<TitleCont>Retos adicionales</TitleCont></Head>
				<Content alt={open2}>
                    <ListItems data={pisoCont} tipo={2}></ListItems>
				</Content>
			</Card>
			<Card>
				<Head onClick={()=>cambio(3)}>
					{open3===0
					?<Icon src={`${prefix}/imgs/main/Icon_flecha_abajo.png`}></Icon>
					:<Icon src={`${prefix}/imgs/main/Icon_flecha_arriba.png`}></Icon>
					}
					<TitleCont>Encuestas de percepción</TitleCont></Head>
				<Content alt={open3}>
                    <ListItems data={pisoCont} tipo={3}></ListItems>
				</Content>
			</Card>
			
        </Margin>
		
	</QV>
}

export default Etesc;
