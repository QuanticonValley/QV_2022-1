import { useState } from 'react'
import { prefix } from '../../utils/prefix.js';

import { getOffice } from '../../public/data'

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import Element from '../../UIcomponents/zcCard'

const imgOffice = `${prefix}/imgs/header/office.png`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-auto-rows: 100px;
	grid-gap: 3em;
	margin: 1px 6%;
	@media screen and (max-width: 800px) {
		grid-auto-rows: 40px;
	}
`
const Margin = styled.div`
	margin: 0 20px;
	@media screen and (max-width: 800px) {
		font-size: 14px;
	}
`

const Office = () => {
	const data = getOffice()

	return <QV pg="Oficina">
		<Header
			title="Oficinas"
			desc="Perfil y progreso de los equipos"
			imgH={imgOffice}
		/>
		<Margin>
			<p>
				En los siguientes enlaces podras encontrar informacion sobre el avance que lleva cada uno de los equipos en los diferentes horarios de la asignatura.
			</p>
		</Margin>
		<Grid>
			{data.map(item => 
				<Element 
					key={item.desc}
					item={item}
				/>
			)}
		</Grid>
	</QV>
}

export default Office;
