import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import Navbar from './components/navbar.js';
import MainComp from './components/mainComp.js';
import { useState } from 'react';

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
	//Petición de datos del usuario
	let idUsuario=1;
	let nombreUsuario= "Berny Alejandro Orozco Córdoba";
    let rolUsuario= "Estudiante";
    let carreraUsuario= "";
    let empresaUsuario= "Universidad Nacional";
    let cargoUsuario= "CEO";
    let puntajeUsuario= 180;
	let infoUsuario="";
	let hojadeVidaUsuario="https://cdn.quepadres.com/wp-content/uploads/2019/04/Dibujos-de-animales-del-mar-para-colorear.pdf";
	let contactoUsuario="";
	let hobbiesUsuario="";
	let lenguajesUsuario="";
	let fotoUsuario="";
	let trofeosUsuario=[8,7,5];
	let facultadUsuario="";
	let institucionUsuario="";
	let IncsUsuario=0;
	let PtsVictoriaUsuario=0;
	
	return (
    <QV pg="Perfil">
		<Header
			title="Perfil"
			desc="Todo sobre ti"
			imgH={imgProfile}
		/>
		<Main>
			<Navbar
				idUsuario={idUsuario}
				fotoUsuario={fotoUsuario}
				trofeosUsuario= {trofeosUsuario}
			></Navbar>
			<MainComp
				idUsuario={idUsuario}
				nombreUsuario={nombreUsuario}
				rolUsuario={rolUsuario}
				carreraUsuario={carreraUsuario}
				cargoUsuario={cargoUsuario}
				empresaUsuario={empresaUsuario}
				puntajeUsuario={puntajeUsuario}
				infoUsuario={infoUsuario}
				hojadeVidaUsuario={hojadeVidaUsuario}
				contactoUsuario={contactoUsuario}
				hobbiesUsuario={hobbiesUsuario}
				lenguajesUsuario={lenguajesUsuario}
				facultadUsuario={facultadUsuario}
				institucionUsuario={institucionUsuario}
				IncsUsuario={IncsUsuario}
				PtsVictoriaUsuario={PtsVictoriaUsuario}
			></MainComp>
		</Main>
	</QV>)
}

export default Profile;
