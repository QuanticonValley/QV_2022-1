import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import Mentores from './components/mentores.js';

const imgCommon = `${prefix}/imgs/header/zones.png`

const Margin = styled.div`
	margin: 0 20px;
`

const Actors = () => {


	return (
    <QV pg="Actores">
		<Header
			title="Actores"
			desc="Aqui puedes conocer a los actores del juego"
			imgH={imgCommon}
		/>
		<Margin>
			<p>
				<Mentores></Mentores>
			</p>
		</Margin>
	</QV>)
}

export default Actors;
