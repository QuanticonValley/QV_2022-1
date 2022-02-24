import styled from 'styled-components'
import { prefix } from '../utils/prefix.js';
import Register from '../UIcomponents/login'

const Container = styled.div`
	background-image: url('${prefix}/imgs/Rectangle 1.png');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  height: 100vh;
`


const Imgn = styled.img`
	margin: 30px;
`
const Intro = styled.p`
	font-size: 1em;
	font-weight: bold;
	color: #fff;
	margin: 0px;
`

const Login = () => {
  return (
    <Container>
      <Imgn src={`${prefix}/imgs/main/QV_Blanco_horizontal.png`}/>
      <Intro>
        Listo para hacer parte de esta nueva aventura?
      </Intro>
      <Register></Register>
    </Container>
  )
}
export default Login
