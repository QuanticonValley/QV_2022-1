import styled from 'styled-components'
import { useMainState } from '../libs/stateHooks'

const GrContainer = styled.div`
	display: flex;
	justify-content: center;
`
const Group = styled.div`
	margin: 10px 8px 5px 8px;
	padding: 5px 10px;
	border-radius: 5px;
	border: 2px solid ${props => props.primary ?"#172bef":null};
	font-weight: bold;
	font-size: 1.2em;
	text-align: center;
    background-color: ${props => props.primary ? '#1920EF' : null};
    color: ${props => props.primary ? '#fff' : "#999"};
	transition: 0.3s;

	:hover {
		transform: scale(1.03);
		cursor: pointer;
		border: 2px solid #172bef;
		color: #172bef;
	}
	@media screen and (max-width: 800px) {
		font-size: .7em;
	}
`

const GroupSel = () => {
  const [mState, setMainState] = useMainState()
	const set = (group) => {
		setMainState({...mState, group})
	}
	return (
			<GrContainer>
				<Group 
					onClick={() => set('dos')}
					primary={mState.group === 'dos'}
				>
							Horario 2 - 4 pm
				</Group>
				<Group 
					onClick={() => set('cuatro')}
					primary={mState.group === 'cuatro'}
				>
							Horario 4 - 6 pm
				</Group>
			</GrContainer>
	);
}

export default GroupSel;
