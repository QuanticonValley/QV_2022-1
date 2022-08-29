import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { prefix } from '../../utils/prefix.js';

import Link from 'next/link'

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'

import Role from './pages/cards'
import Stats from './pages/stats'

const imgInfo = `${prefix}/imgs/header/info.png`
const Cont = styled.div`
	padding: 0px 30px;
	@media screen and (max-width: 800px) {
		padding:0;
	}
`
const Selector = styled.div`
	display: flex;
	position: relative;
`
const SelItem = styled.div`
	margin: .5em 1em;
	font-weight: bold;
	font-size: 1em;
	color: ${p=>p.active ?'black':'#999'};
	:hover {
		cursor: pointer;
	}
	@media screen and (max-width: 510px) {
		font-size: .7em;
		margin: 0 5px;
	}
`
const SelBar = styled.div`
	position: absolute;
	background: #172BEF;
	height: 3px;
	width: ${p=>p.w || '60'}px;
	top: ${p=>p.y || '0'}px;
	left: ${p=>p.x || '0'}px;
	transition: .3s ease;
`

const RoleTest = () => {
  const router = useRouter()
  const type = router.query.type

	const selRef = useRef()
	const barRef = useRef()
	const [selPos, setSelPos] = useState()
	const [barPos, setBarPos] = useState()
	const bx = barPos?.x - selPos?.x
	const by = barPos?.y - selPos?.y + barPos?.height + 2
	const bw = barPos?.width

	useEffect(()=>{
		setSelPos(selRef?.current?.getBoundingClientRect())
		setBarPos(barRef?.current?.getBoundingClientRect())
	}, [type])

	return <QV pg="Test de roles">
		<Selector ref={selRef}>
			<Link href='/roleTest/stats' passHref>
				<SelItem 
					active={type==='stats'}
					ref={type==='stats'? barRef : null}
				>
				ESTADÍSTICAS
			</SelItem></Link>
			<Link href='/roleTest/cards' passHref>
				<SelItem 
					active={type==='cards'}
					ref={type==='cards'? barRef : null}
				>
				JUEGO DE CARTAS
			</SelItem></Link>
			<SelBar x={bx} y={by} w={bw}/>
		</Selector>
		<Cont>
			{type === 'stats'&& (<Stats />)}
			{type === 'cards'&& (<Role />)}
		</Cont>
	</QV>
}

export default RoleTest;