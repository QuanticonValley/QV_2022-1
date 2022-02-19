import QV from "../../UIcomponents/qv";
import { prefix } from '../../utils/prefix.js';
import { useEffect, useState } from "react";

import styled from 'styled-components'
import GroupSel from "../../UIcomponents/groupSel";
import PisosSel from '../../UIcomponents/pisoSel';
import { getAsesorSrc, getLobbyData, statePiso, } from "../../public/data";
import { useMainState } from "../../libs/stateHooks";
import ItemList from '../../UIcomponents/SrcItemList'
import GroupContentComponent from "./GroupContentComponent";

import Header from '../../UIcomponents/header'
import TitleCont from '../common/TitleCont';

const imgPrin = `${prefix}/imgs/header/info.png`

const Margin = styled.div`
	margin: 0 20px;
`

const Content = () => {

    const [mState, ] = useMainState()
    const group = mState.group ? mState.group : 'dos'
    const piso = mState.piso ? mState.piso : 1
    const [dataLobby, setDataLobby] = useState({})
    const [dataAsrc, setDataAsrc] = useState({})
    const pisoA = statePiso()

    useEffect(() => {
		setDataLobby(getLobbyData(group, piso))
	}, [group, piso])

    useEffect(() => {
		setDataAsrc(getAsesorSrc(group, piso))
	}, [group, piso])

    return <QV pg="Contenido">
        <Header
			title="Contenido"
			desc="Información para desarrollar tu proyecto"
			imgH={imgPrin}
		/>
        <Margin>
            <p>
				Accede a Recursos y Objetos Virtuales de Aprendizaje (OVAs) que se actualizan en cada piso, estos contienen valiosa informacion para ampliar y complementar tu proyecto.
			</p>
            <GroupSel /> 
            <PisosSel/>
            <TitleCont>Contenidos de Piso</TitleCont>
            {piso <= pisoA
                    ?	<ItemList data={dataLobby}/>
                    : null }
            <br></br>
            <hr></hr>
            <TitleCont>Recursos de Asesores</TitleCont>
            {piso <= pisoA
                    ?	<ItemList data={dataAsrc}/>
                    : null }
            <br></br>
        </Margin>
        
    </QV>
}

export default Content;