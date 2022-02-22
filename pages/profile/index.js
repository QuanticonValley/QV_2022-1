import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'

const imgProfile = `${prefix}/imgs/header/principal.png`

const Margin = styled.div`
	margin: 0 20px;
`

const Profile = () => {


	return (
    <QV pg="Perfil">
		<Header
			title="Perfil"
			desc="Todo sobre ti"
			imgH={imgProfile}
		/>
		<Margin>
			<p>
				Aqui va el contenido de esta pagina (Foto, Info, Trofeos, etc)
			</p>
		</Margin>
	</QV>)
}

export default Profile;
