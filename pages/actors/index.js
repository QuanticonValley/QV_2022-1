import { prefix } from '../../utils/prefix.js';
import {useState} from 'react'
import styled from 'styled-components'
import QV from '../../UIcomponents/qv';
import Header from '../../UIcomponents/header'
import Mentores from './components/mentores.js';
import Virt from '../zones/[type]/asesor/virt.js';
const imgCommon = `${prefix}/imgs/header/zones.png`

const Margin = styled.div`
	margin: 0 2px;
	@media screen and (max-width: 800px) {
		margin:0px;
	}
`
const Option= styled.div`
    font-size:1.2rem;
    font-weight: 700;
    margin-right: 10px;
    margin-bottom: 10px;
    border-bottom: ${p=>p.selected ?'3px solid #172BEF':'0px'};
	color: ${p=>p.selected ?'black':'#999'};
    :hover{
		cursor: pointer;
	}
    @media screen and (max-width: 800px) {
		font-size:1rem;
	}
`
const Opciones= styled.div`
	display: flex;
	margin-bottom: 20px;
	margin-left:10px;
`
const Actors = () => {
	const [selected,setSelected]= useState(true);
    function cambio(opti){
        setSelected(opti);
    }
	return (
    <QV pg="Actores">
		<Header
			title="Actores"
			desc="Aqui puedes conocer a los actores del juego"
			imgH={imgCommon}
		/>
		<Margin>
			<Opciones>
				<Option selected={selected} onClick={() =>cambio(true)}>MENTORES</Option>
            	<Option selected={!selected} onClick={() =>cambio(false)}>ASESORES</Option>
			</Opciones>
			{selected
			?<Mentores></Mentores>
			:<Virt active={true}></Virt>}
			
			
		</Margin>
	</QV>)
}

export default Actors;
