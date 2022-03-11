import { useMainState } from '../../libs/stateHooks'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Link from 'next/link'
import { prefix } from '../../utils/prefix.js';
import { statePisoA, getDataProg, getLogosExt } from '../../public/data'

import QV from '../../UIcomponents/qv';

import Header from '../../UIcomponents/header'

import { getNoti } from '../../public/data'

const imgPrin = `${prefix}/imgs/header/principal.png`

const Image = styled.img`
	margin-right: 1em;
`
const Title = styled.h3`
	border-bottom: 2px solid #ffc024;
`
const Descr= styled.h3`
	text-align:center;
`
const Grid = styled.div`
	display: grid;
	margin: 0 3em;
	grid-template-columns: repeat(2, 1fr);
	align-content:center;
	grid-gap: 1em;
	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr
	}
`
const GridB = styled.div`
	display: grid;
	margin: 0 3em;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1em;
	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr
	}
`
const Entrega = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 60px;
	padding: .5em;
	grid-column: span 2;

	font-weight: bold;
	background: #FFFFFF;
	color: #172BEF;
	border: 1.5px solid #172BEF;
	box-sizing: border-box;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
	border-radius: 10px;

	transition: .3s ease;
	:hover {
		border: 2px solid #172BEF;
		transform: scale(1.03);
		cursor: pointer;
	}
	div {
		margin: .2em 1em;
	}
	p {
		margin: 0;
		color: black;
	}
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`

const Noti = styled.img`
	grid-row: span 2;
	border-radius: 1em;
	width: 100%;
	transition: .3s ease;
	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`
const LogoExt= styled.div`
	grid-row: span 2;
	display: flex;
	text-align:center;
	justify-content: center;
	align-items: center;
`
const Logo = styled.img`
	border-radius: 1em;
`
const MejoresProyectos = styled.a`
	display: flex;
	text-align:center;
	justify-content: center;
	align-items: center;
	grid-row: span 2;
	min-height: 60px;
	font-weight: bold;
	font-size:40px;
	background: #FFC024;
	box-sizing: border-box;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
	border-radius: 10px;

	transition: .3s ease;
	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
	@media screen and (max-width: 1500px) {
		font-size: 30px;
	}
	@media screen and (max-width: 900px) {
		font-size: 20px;
	}
`

const TitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em 4em 0 0;
	margin-left: 5%;
`
const TextBox = styled.div`
	color: black;
	font-weight: normal;
	text-align: center;
`
const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1em;
	
`
const Flex2 = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 1em;
	flex-wrap:wrap;
	margin-left: 5%;
`
const Box = styled.div`
	justify-content: center;
	align-items: center;
	min-height: 60px;
	padding: 1em;

	color: #172BEF;
	font-weight: bold;
	background: #FFFFFF;
	border: 2px solid #D8DEF3;
	box-sizing: border-box;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
	border-radius: 10px;

	transition: .3s ease;
	:hover {
		border: 2px solid #172BEF;
		cursor: pointer;
	}
`
const Imagen= styled.img`
	height: 60px;
	margin:8px;
	border-radius:10px;
`
const Principal = () => {
  const [mState, setMainState] = useMainState()
	const logos=getLogosExt()
	console.log(logos);

 	const noti = getNoti() 
	const video = noti[0] 
		? noti[0] : null

	const openModal = (type) => {
    setMainState({
      ...mState,
      modal: {
        visibility: true,
        type: type
      }
    })
	}

  return <QV pg="Principal">
		<Header
			title="Quanticon Valley"
			desc="Bienvenidos/as"
			imgH={imgPrin}
			primary
		/>
		<Descr>Quanticon Valley es una apuesta de gamificación desarrollada y propuesta por la Facultad de ingeniería</Descr>
		<TitleBox>
			<Title>Conoce Quanticon Valley</Title>
		</TitleBox>
		<Grid>
			<LogoExt><Logo
				src={`${prefix}/imgs/info/QV.png`}
			></Logo>
			</LogoExt>
			<ReactPlayer
            url = {"www.youtube.com/watch?v=kyNsLdhTu3c&ab_channel=LIATERUNAL"}
            className='react-player'
            width='100%'
            height='400px'
            controls
            ></ReactPlayer>
		</Grid>

		<TitleBox>
			<Title>Conoce a los ganadores de la décima edición</Title>
		</TitleBox>
		<Grid>
			<Noti 
				src={`${prefix}/imgs/principal/lastNoti.png`}
				onClick={()=>openModal('Noticiero')}
			/>
			<MejoresProyectos href={"https://ingenieria.unal.edu.co/tpi/index.php/tpi-expoideas/tpi-expoideas-2021-3?id=513"} target="_blank" rel="noreferrer">
				¡Conoce los proyectos desarrollados por los ganadores!
			</MejoresProyectos>
			
		</Grid>


		<TitleBox>
			<Title>Conoce a los actores de Quanticon Valley</Title>
		</TitleBox>
		<GridB>
			<Link href='/actors' passHref>
				<Box>
					<Flex>
						<Image src={`${prefix}/imgs/principal/lobby.png`} alt=""/>
						Mentores
					</Flex>
					<TextBox>Descubre a los profesores mentores que te acompañarán en tu proyecto</TextBox>
				</Box>
			</Link>
			<Link href='/actors' passHref>
				<Box>
					<Flex>
						<Image src={`${prefix}/imgs/principal/asesores.png`} alt=""/>
						Asesores
					</Flex>
					<TextBox>Encuentra contenido adicional para apoyar tu proyecto y contacta asesores.</TextBox>
				</Box>
			</Link>
			
		</GridB>
		<TitleBox>
			<Title>Líderes de innovación abierta - participantes</Title>
		</TitleBox>
		<Flex2>
		{logos.map((logo,index)=><Imagen key={index} src={`${prefix}/imgs/extern/${logo[0]}`}></Imagen>)}
		</Flex2>

	</QV>
}
export default Principal
