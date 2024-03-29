import styled from 'styled-components'
import NavCont from './main/navBar'
import NavMob from './main/navMobile'
import RightBar from './main/rightBar'
import MobBar from './main/MobBar'

import { useState } from 'react'

const Container = styled.div`
	overflow: hidden;
	position: relative;
  background-color: #eee;
  width: 100%;
	height: 100vh;
	display: grid;
	transition: 0.3s ease;
	grid-template-columns: 1fr 4fr 1.3fr;
	grid-template-rows: auto;
	grid-template-areas: 
		"sb  ct  rb";
	margin: 0;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 
			"ct";
	}
`
const GoogleButton = styled.div`
	position: absolute;
	right: 2.9vw;
	top: 3.8vh;
	@media screen and (max-width: 800px) {
		right: 10vh;
		top: 9vh;
	}

`
const Content = styled.div`
	grid-area: ct;
	padding: 0 2em 150px 2em;
	margin: 0 .2em;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 800px) {
		padding: 0 0 150px 0;
	}
	::-webkit-scrollbar-track {
		border: none;
		padding: 10px 0;
		margin: 10px 0;
		background-color: none;
	}
	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #ccc;
		border: 1px solid rgba(0,0,0,0);
	}
`

const QV = ({ children, pg, button}) => {
	const [actRight, setActRight] = useState(false)
	const closeRight = () => {setActRight(false)}
  return (
		<Container>
			<GoogleButton > {button}</GoogleButton>
			<Content>
				{children}
			</Content>

			<RightBar	
				active={actRight}
				close={closeRight}
			/>
			<NavCont pg={pg}/>
			<NavMob pg={pg}/>
			<MobBar open={() => setActRight(true)}/>
		</Container>
  );
}

export default QV;
