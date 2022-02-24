import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import Navbar from './components/navbar.js';
import MainComp from './components/mainComp.js';

const imgProfile = `${prefix}/imgs/header/principal.png`

const Main = styled.div`
	margin: 0 10px;
	display:flex;
	height:100%;
	
	@media screen and (max-width: 1500px) {
		flex-direction: column;
	}
`

const Profile = () => {


	return (
    <QV pg="Perfil">
		<Header
			title="Perfil"
			desc="Todo sobre ti"
			imgH={imgProfile}
		/>
		<Main>
			<Navbar></Navbar>
			<MainComp></MainComp>
		</Main>
	</QV>)
}

export default Profile;
