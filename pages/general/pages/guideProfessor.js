import styled from 'styled-components';
import Pdf from '../../../UIcomponents/pdf';
import { prefix } from '../../../utils/prefix';
import { useMainState } from '../../../libs/stateHooks'

const Title = styled.h3`
	font-size: 20px;
	font-weight: 700;
`
const ExtLink= styled.div`
	color: blue;
	font-weight: 500;
	text-align: right;
	margin-right: 8%;
	@media screen and (max-width: 800px) {
		font-size: 14px;
	}
`

const GuideProfessor = () => {
   const [mState, setMainState] = useMainState();
   return <div>
      <Title></Title>
      {
         mState.group == 'dos'
            ? <Pdf file={"content/Guia de trabajo profesor mentor - emprendimiento 2022-3.pdf"}></Pdf>
            : <Pdf file={"content/Guía de trabajo profesor mentor - innovación abierta 2022-3.pdf"}></Pdf>
      }

      {
         mState.group == 'dos'
            ? <ExtLink><a href={`${prefix}/content/Guia de trabajo profesor mentor - emprendimiento 2022-3.pdf`} target="_blank" rel="noreferrer">¿Cargar en una pestaña nueva?</a></ExtLink>
            : <ExtLink><a href={`${prefix}/content/Guía de trabajo profesor mentor - innovación abierta 2022-3.pdf`} target="_blank" rel="noreferrer">¿Cargar en una pestaña nueva?</a></ExtLink>
      }
   </div>
}

export default GuideProfessor;
