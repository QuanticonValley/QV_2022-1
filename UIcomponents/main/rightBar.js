import styled from 'styled-components'
// import Link from 'next/link'
import { prefix } from '../../utils/prefix.js';
import ReactTooltip from 'react-tooltip'
import { useState, useEffect } from 'react';

import { useMainState } from '../../libs/stateHooks'

import NotiWidget from '../notiWidget'
import Calendar from '../calendar/index'
// import GroupSel from '../groupSel'
import Miniprofile from '../miniprofile.js';

const Container = styled.div`
	grid-area: rb;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: #fff;
	padding: 0px .5em;
	margin: 5px 2px;
	top: 5px;
	height: 98vh;
	box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.15);
	transition: all .3s ease-in;

	@media screen and (max-width: 800px) {
		position: absolute;
		z-index: 3;
		height: 100%;
		width: '100%';
		top: 0;
		right: ${p => p.active ? '0' : '-1300px'};
		margin: 0;
		padding: 60px 1em .5em 1em;
	}
`
const ItemB = styled.div`
  display: flex;
	align-items: center;
	border-radius: 1em;
	justify-content: center;
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
  background-color:#1920EF;
  color: white;
  padding: .5em 1em;
  font-weight: bold;
  font-size: 1em;
	text-align: end;
  transition: 0.3s;

	:hover {
		transform: scale(0.98);
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
		cursor: pointer;
	}
`
const Header = styled.div`
	position: absolute;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: .5em 1em;
	background-color:#1920EF;
	color: white;
	z-index: 4;
	top: 0;
	right: 0;
	width: 100%;
	height: 60px;

	@media screen and (min-width: 800px) {
		display: none;
	}
`
const CloseImg = styled.img`
	width: 2.4em;
	transition: .3 ease;
	:hover {
		transform: scale(1.05);
	}
`
const HallFame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 60px;

	font-weight: bold;
	background: #FFC024;
	box-sizing: border-box;
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
	border-radius: 10px;

	transition: .3s ease;
	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`
const Image = styled.img`
	margin-right: 1em;
`

const RightBar = ({active, close}) => {
	const [isMounted,setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    },[]);
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
	return (
		<Container active={active}>
			<Header>
					<CloseImg 
						onClick={close}
						src={`${prefix}/imgs/exit.png`}
					/>
			</Header>
			<div style={{fontSize: '.9em'}}>
			{/* <GroupSel/> */}
			</div>
			
			<Miniprofile></Miniprofile>
			<Calendar/>
			
			<NotiWidget open={()=>openModal('Noticiero')}/>
			<a href="https://drive.google.com/file/d/1xRTV1yWZlF3viIvIS8vgQjLpMZy9AP51/view?usp=sharing" target="_blank" rel="noreferrer">
				<ItemB data-tip data-for="dscTooltipPils">
					<img src={`${prefix}/imgs/pil2.png`}/>
					Pildoras de la semana
				</ItemB>
			</a>
			<HallFame onClick={()=>openModal('Salon de la Fama')} data-tip data-for="dscTooltipHF">
				<Image src={`${prefix}/imgs/principal/hallfame.png`}/>
				Salon de la Fama
			</HallFame>

			{isMounted &&<ReactTooltip id="dscTooltipPils" place='left' type='info'>
				Informacion para la Semana
			</ReactTooltip>}

			{isMounted &&<ReactTooltip id="dscTooltipHF" place='left' type='info'>
				Tabla de Clasificación 
			</ReactTooltip>}
		</Container>
	);
}

export default RightBar;
